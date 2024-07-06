// import React from "react";
import { IItem } from "../../types/types";
import styles from "./ItemCard.module.css";
import { Counter } from "..";
import { Link } from "react-router-dom";

interface ItemCardProps {
  item: IItem;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <Link to={`/product/${item.id}`} className={styles.link}>
      <div className={styles.cardBox}>
        <div className={styles.imgBox}>
          <div className={styles.hover}>Show details</div>
          <img src={item.image} />
        </div>
        <div className={styles.extra}>
          <div className={styles.extraLeft}>
            <p>{item.name}</p>
            <span>{`${item.price} $`}</span>
          </div>
          <div onClick={(e) => e.stopPropagation()}>
          <Counter count={item.catalogCount} />
          </div>
        </div>
      </div>
    </Link>
  );
}
