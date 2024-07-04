import React from "react";
import { IItem } from "../../types/types";
import styles from "./ItemCard.module.css";
import { Button } from "..";
import { Link } from "react-router-dom";

interface ItemCardProps {
  item: IItem;
}

const icon: React.ReactNode = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
    <use href="/src/assets/icons.svg#cart" />
  </svg>
);

export function ItemCard({ item }: ItemCardProps) {
  return (
    <Link to={`/product/${item.id}`} >
    <div className={styles.cardBox}>
      <div className={styles.imgBox}>
        <div className={styles.hover}>Show details</div>
        <img src={item.image} />
      </div>
      <div className={styles.extra}>
        <div>
          <p>{item.name}</p>
          <span>{`${item.price} $`}</span>
        </div>
        <div className={styles.buttonBox}>
          <Button content={icon} width={50} height={50} onClick={() => {}} />
        </div>
      </div>
    </div>
    </Link>
  );
}
