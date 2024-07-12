// import React from "react";
import { IItem } from "../../types/types";
import styles from "./ItemCard.module.css";
import { Counter } from "..";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../features/hooks";

interface ItemCardProps {
  item: IItem;
}

export function ItemCard({ item }: ItemCardProps) {
const {productMap, isLoading} = useAppSelector((store) => store.cartSlice)


  return (
    <Link to={`/product/${item.id}`} className={styles.link}>
      <div className={styles.cardBox}>
        <div className={styles.imgBox}>
          <div className={styles.hover}>Show details</div>
          <img src={item.thumbnail} />
        </div>
        <div className={styles.extra}>
          <div className={styles.extraLeft}>
            <p>{item.title}</p>
            <span>{`${item.price} $`}</span>
          </div>
          <div onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            }}>
              {/* Не работает!!!!!!!!!!!!!!!!!!!!!!! */}
          <Counter count={!isLoading && productMap ? productMap[String(item.id)]:0} />
          </div>
        </div>
      </div>
    </Link>
  );
}
