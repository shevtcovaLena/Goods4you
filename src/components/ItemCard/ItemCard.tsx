import { ICartInfo, ICartItem, IItem } from "../../types/types";
import styles from "./ItemCard.module.css";
import { Counter, Preview } from "..";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPrice } from "../../helpers/getPrice";
import { fetchPutCart } from "../../redux/cart/cartThunkActions";

interface ItemCardProps {
  item: IItem;
}

export function ItemCard({ item }: ItemCardProps) {
  const { token } = useAppSelector((store) => store.userSlice);
  const cart = useAppSelector((store) => store.cartSlice.cartInfo);
  const isLoading: boolean = useAppSelector((store) => store.cartSlice.isLoading)
  const productInCart = cart && cart.products.find((product: ICartItem) => product.id === item.id);
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
    const getNewCart=((prevCart: ICartInfo) => {
      const updatedProducts = prevCart.products.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return { ...prevCart, products: updatedProducts };
    });
    void dispatch(fetchPutCart({ cart: getNewCart(cart), token }))
  };

  return (
    <Link to={`/product/${item.id}`} className={styles.link}>
      <div className={styles.cardBox}>
        <div className={styles.imgBox}>
          <div className={styles.hover}>Show details</div>
          <Preview image={item.thumbnail} />
        </div>
        <div className={styles.extra}>
          <div className={styles.extraLeft}>
            <p>{item.title}</p>
            <span>{`${getPrice(item.price, item.discountPercentage)} $`}</span>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Counter count={productQuantity} onPlus={() => handlePlus(item)} onMinus={() => handleMinus(item)} max={item.stock} isLoading={isLoading}/>
          </div>
        </div>
      </div>
    </Link>
  );
}
