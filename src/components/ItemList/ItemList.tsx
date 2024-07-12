// import React from "react";
import { useEffect, useState } from "react";
import { Button, ItemCard } from "../";
import { IItem } from "../../types/types";
import styles from "./ItemList.module.css";
import { debounce } from "lodash";
import { useGetProductsQuery } from "../../features/products/productsApi";

export function ItemList() {
  const [items, setItems] = useState<IItem[]>([]);
  const [q, setSearch] = useState<string>("");
  const [skip, setSkip] = useState<number>(0);

  const { data, error, isLoading } = useGetProductsQuery({
    q,
    limit: 12,
    skip,
  });

  useEffect(() => {
    if (data && skip === 0) {
      setItems(data.products);
    }
    if (data && skip !== 0) {
      setItems((prevProducts) => [...prevProducts, ...data.products]);
    }
    if (error) {
      console.log("error", error);
    }
  }, [data, error]);

  const inputHandler = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setItems([]);
    setSkip(0);
    setSearch(e.target.value);
  }, 1000);

  return (
    <div id="catalog" className={styles.catalog}>
      <h1>Catalog</h1>
      <input placeholder="Search by title" onChange={inputHandler}></input>
      <div className={styles.itemBox}>
        {items.length && !isLoading ?
          items.map((item) => <ItemCard key={item.id} item={item} />) : <p>No products</p>}
        {isLoading && "Loading..."}
      </div>
      {data && (skip + 12) < data.total && <div className={styles.buttonBox}>
        <Button
          content={"Show more"}
          width={177}
          height={62}
          onClick={() => {
            setSkip(data.skip + 12);
          }}
        />
      </div>}
    </div>
  );
}
