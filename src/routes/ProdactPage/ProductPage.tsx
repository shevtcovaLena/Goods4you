// import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { Counter, Gallery, Loader, Rating } from "../../components";
import { Helmet } from "react-helmet-async";
import { useGetProductByIdQuery } from "../../redux/products/productsApi";
import { getPrice } from "../../helpers/getPrice";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { useAppSelector } from "../../redux/hooks";
import { ICartItem } from "../../types/types";

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const { data, error, isLoading } = useGetProductByIdQuery(
    productId as string
  );

  const cart = useAppSelector((store) => store.cartSlice.cartInfo);

  const productInCart = cart.products.find(
    (product: ICartItem) => product.id === Number(productId)
  );
  const productQuantity = productInCart ? productInCart.quantity : 0;

  return (
    <>
      <Helmet>
        <title>{`${data?.title} | Goods4you`}</title>
      </Helmet>
      {isLoading && <Loader variant="large"/>}
        <div className={`container ${styles.product}`}>
      {error && <ErrorPage externalError={error} />}
      {data && (
          <><Gallery images={data?.images as string[]} /><div className={styles.infoBox}>
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
              <Counter count={productQuantity} variation="large" />
            </div>
          </div></> )}
        </div>
     
    </>
  );
}
