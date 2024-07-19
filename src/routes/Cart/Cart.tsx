import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { CartItem } from "../../components";
import { Helmet } from "react-helmet-async";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ICartInfo, ICartItem } from "../../types/types";
import { fetchPutCart } from "../../redux/cart/cartThunkActions";

export function Cart() {
  const cartData: ICartInfo = useAppSelector(
    (store) => store.cartSlice.cartInfo
  );
  const { token } = useAppSelector((store) => store.userSlice);
  const [current, setCurrent] = useState<number | null>(null);
  const [cart, setCart] = useState<ICartInfo>(cartData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!cart.products.length) {
      setCart(cartData);
    }
  }, [cartData]);


  useEffect(() => {
    if (cart.id !== 0){
      void dispatch(fetchPutCart({ cart, token }))
    }
  },[cart])

  const handlePlus = (item: ICartItem) => {
    setCart((prevCart: ICartInfo) => {
      const updatedProducts = prevCart.products.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      return { ...prevCart, products: updatedProducts };
    });
  };

  const handleMinus = (item: ICartItem) => {
    setCart((prevCart: ICartInfo) => {
      const updatedProducts = prevCart.products.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return { ...prevCart, products: updatedProducts };
    });
  };

  const handleDelete = (item: ICartItem) => {
    setCart((prevCart: ICartInfo) => {
      const updatedProducts = prevCart.products.map((product) =>
        product.id === item.id
          ? { ...product, quantity: 0 }
          : product
      );
      return { ...prevCart, products: updatedProducts };
    });
  };

  return (
    <>
      <Helmet>
        <title>MyCart | Goods4you</title>
      </Helmet>
      <div className={`container ${styles.cart}`}>
        <h1>My cart</h1>
        {cartData.totalProducts ? (
          <div className={styles.content}>
            <div className={styles.contentLeft}>
              {cart.products.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  count={item.quantity as number}
                  current={current === item.id ? true : false}
                  onPlus={() => handlePlus(item)}
                  onMinus={() => handleMinus(item)}
                  onDelete={() => handleDelete(item)}
                  onClick={() => setCurrent(item.id)}
                />
              ))}
            </div>
            <div className={styles.contentRight}>
              <div className={styles.calculation}>
                <div className={styles.line}>
                  <p>Total count</p>
                  <span>{`${cartData.totalQuantity} items`}</span>
                </div>
                <div className={styles.line}>
                  <p>Price without discount</p>
                  <span>{`${cartData.total.toFixed(2)}$`}</span>
                </div>
              </div>

              <div className={styles.total}>
                <div className={styles.line}>
                  <p>Total price</p>
                  <span>{`${cartData.discountedTotal}$`}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.nodata}>No items</div>
        )}
      </div>
    </>
  );
}
