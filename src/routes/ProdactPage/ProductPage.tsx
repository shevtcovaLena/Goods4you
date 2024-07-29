// import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { Counter, Gallery, Loader, Rating } from "../../components";
import { Helmet } from "react-helmet-async";
import { useGetProductByIdQuery } from "../../redux/products/productsApi";
import { getPrice } from "../../helpers/getPrice";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ICartInfo, ICartItem, IItem } from "../../types/types";
import { fetchPutCart } from "../../redux/cart/cartThunkActions";

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const { data, error, isLoading } = useGetProductByIdQuery(
    productId as string
  );

  const { token } = useAppSelector((store) => store.userSlice);
  const cart = useAppSelector((store) => store.cartSlice.cartInfo);
  const cartLoading: boolean = useAppSelector((store) => store.cartSlice.isLoading)
  
  const productInCart = cart.products.find(
    (product: ICartItem) => product.id === Number(productId)
  );
  const productQuantity = productInCart ? productInCart.quantity : 0;
  const dispatch = useAppDispatch();

  const handlePlus = (item: IItem) => {
    const getNewCart = (prevCart: ICartInfo) => {
      const productExists = prevCart.products.some(
        (product) => product.id === item.id
      );
      let updatedProducts;
      if (productExists) {
        updatedProducts = prevCart.products.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        const newItem = {
          id: item.id,
          title: item.title,
          price: item.price,
          total: 0,
          discountPercentage: item.discountPercentage,
          discountedTotal: 0,
          thumbnail: item.thumbnail,
        };
        updatedProducts = [...prevCart.products, { ...newItem, quantity: 1 }];
      }
      return { ...prevCart, products: updatedProducts };
    };
    void dispatch(fetchPutCart({ cart: getNewCart(cart), token }));
  };

  const handleMinus = (item: IItem) => {
    const getNewCart = (prevCart: ICartInfo) => {
      const updatedProducts = prevCart.products.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return { ...prevCart, products: updatedProducts };
    };
    void dispatch(fetchPutCart({ cart: getNewCart(cart), token }));
  };

  return (
    <>
      <Helmet>
        <title>{`${data?.title} | Goods4you`}</title>
      </Helmet>
      {isLoading && <Loader variant="large" />}
      <div className={`container ${styles.product}`}>
        {error && <ErrorPage externalError={error} />}
        {data && (
          <>
            <Gallery images={data?.images as string[]} />
            <div className={styles.infoBox}>
              <div>
                <h1>{data?.title}</h1>
                <div className={styles.productMeta}>
                  <Rating rating={Math.round(data?.rating || 0)} />
                  <div className={styles.category}>{data?.tags.join(", ")}</div>
                </div>
              </div>
              <div className={styles.stockStatus}>
                {data?.stock
                  ? `${data?.availabilityStatus} - Only ${data?.stock} left!`
                  : `${data?.availabilityStatus}`}
              </div>
              <div className={styles.description}>{data?.description}</div>
              <div className={styles.terms}>
                <div>{data?.warrantyInformation}</div>
                <div>{data?.shippingInformation}</div>
              </div>
              <div className={styles.productFooter}>
                <div className={styles.price}>
                  <div className={styles.priceLeft}>
                    <div className={styles.currentPrice}>{`${getPrice(
                      data?.price || 0,
                      data?.discountPercentage || 0
                    )}$`}</div>
                    <div className={styles.oldPrice}>{`${data?.price}$`}</div>
                  </div>
                  <div className={styles.discount}>
                    Your discount: <span>{`${data?.discountPercentage}%`}</span>
                  </div>
                </div>
                <Counter
                  count={productQuantity}
                  onPlus={() => handlePlus(data)}
                  onMinus={() => handleMinus(data)}
                  max={data.stock}
                  variation="large"
                  isLoading={cartLoading}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
