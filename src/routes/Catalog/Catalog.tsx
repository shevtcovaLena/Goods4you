// import React from "react";
import data from "../../assets/data.json";
import { Button, ItemList } from "../../components/";
import styles from "./Catalog.module.css";

export function Catalog() {
  return (
    <>
      <div className={styles.baner}>
        <div className={`container ${styles.content}`}>
          <p>
            Any products from famous brands
            <br />
            with worldwide delivery
          </p>
          <span>
            We sell smartphones, laptops, clothes, shoes
            <br />
            and many other products at low prices
          </span>
          <Button content={"Go to shopping"} width={207} height={62} onClick={()=>{}} role="link"/>
        </div>
      </div>
      <div className="container">
        <ItemList items={data} />
      </div>
    </>
  );
}
