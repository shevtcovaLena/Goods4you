// import React from "react";
import { ICartItem } from "../../types/types";
import styles from "./CartItem.module.css";
import { Link } from "react-router-dom";
import { Counter } from "../";
import { getPrice } from "../../helpers/getPrice";

interface Props {
  item: ICartItem;
  count: number;
  current: boolean;
  // onPlus: () => void;
  // onMinus: () => void;
  onClick: () => void;
}

export function CartItem({
  item,
  count,
  current,
  /*onPlus, onMinus, ,*/
  onClick,
}: Props) {
  return (
    <div
      className={`${styles.card} ${current ? styles.active : ""}`}
      onClick={onClick}
    >
      <div
        className={styles.leftPart}
        style={{ opacity: count === 0 ? "0.65" : "" }}
      >
        <div className={styles.image}>
          <img src={item.thumbnail} alt="Item in cart" />
        </div>
        <div className={styles.extra}>          
            <Link to={`/product/${item.id}`}>
              <p>{item.title}</p>
            </Link>
            <span>{`${getPrice(item.price, item.discountPercentage)} $`}</span>          
        </div>
      </div>
      <div className={styles.rightPart}>
          <Counter count={count} /*onMinus={onMinus} onPlus={onPlus}*/ />
          {count !== 0 && <button className={styles.delete}>Delete</button>}
      </div>
    </div>
  );
}
