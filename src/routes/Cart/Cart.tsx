import { /*useEffect,*/ useState } from "react";
import styles from "./Cart.module.css";
import data from "../../assets/data.json";
import { CartItem } from "../../components";
import { IItem } from "../../types/types";

const cartData:NonNullable<IItem>[] = data
  .slice(0, 4)
  .map((item) => ({ ...item, image: "/src/assets/photo.jpg" }));

export function Cart() {
  // const [count, setCount] = useState<Record<string, number>>({});
  const [current, setCurrent] = useState<number | null>(null);

  // useEffect(() => {
  //   data.forEach((item) => {
  //     setCount((pre) => ({ ...pre, [String(item.id)]: 1 }));
  //   });
  // }, []);

  return (
    <div className={`container ${styles.cart}`}>
      <h1>My cart</h1>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          {cartData.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              count={item.count as number}
              current={current === item.id ? true : false}
              onClick={() => setCurrent(item.id)}
              // count={count[String(item.id)]}
              // onMinus={() =>
              //   setCount((pre) => ({
              //     ...pre,
              //     [String(item.id)]: pre[String(item.id)] - 1,
              //   }))
              // }
              // onPlus={() =>
              //   setCount((pre) => ({
              //     ...pre,
              //     [String(item.id)]: pre[String(item.id)] + 1,
              //   }))
              // }
            />
          ))}
        </div>
        <div className={styles.contentRight}>
          <div className={styles.calculation}>
            <div className={styles.line}>
              <p>Total count</p>
              <span>3 items</span>
            </div>
            <div className={styles.line}>
              <p>Price without discount</p>
              <span>700$</span>
            </div>
          </div>

          <div className={styles.total}>
            <div className={styles.line}>
              <p>Total price</p>
              <span>590$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
