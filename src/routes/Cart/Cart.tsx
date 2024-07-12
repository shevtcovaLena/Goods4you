import { useState } from "react";
import styles from "./Cart.module.css";
import { CartItem } from "../../components";
import { Helmet } from "react-helmet-async";
import { useAppSelector } from "../../features/hooks";
import { ICartInfo } from "../../types/types";


export function Cart() {
  const cartData: ICartInfo = useAppSelector((store) => (store.cartSlice.cartInfo))
  const [current, setCurrent] = useState<number | null>(null);

  return (
    <>
    <Helmet>
      <title>MyCart | Goods4you</title>
    </Helmet>
    <div className={`container ${styles.cart}`}>
        <h1>My cart</h1>
        {cartData.totalProducts ? <div className={styles.content}>
          <div className={styles.contentLeft}>
            {cartData.products.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                count={item.quantity as number}
                current={current === item.id ? true : false}
                onClick={() => setCurrent(item.id)} />
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
                <span>{`${cartData.total}$`}</span>
              </div>
            </div>

            <div className={styles.total}>
              <div className={styles.line}>
                <p>Total price</p>
                <span>{`${cartData.discountedTotal}$`}</span>
              </div>
            </div>
          </div>
        </div> : <div className={styles.nodata}>No items</div>}
      </div>
      </>
  );
}
