import React from "react";
import { ItemCard } from "../";
import { IItem } from "../../types/types";
import styles from "./ItemList.module.css";

interface ItemListProps {
  items: IItem[];
}

export function ItemList({ items }: ItemListProps) {
  return (
    <div id="catalog" className={styles.catalog}>
      <h1>Catalog</h1>
      <input placeholder="Search by title"></input>
      <div className={styles.itemBox}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
