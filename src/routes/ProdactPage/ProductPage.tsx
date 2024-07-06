// import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
import { IItem } from "../../types/types";
import styles from "./ProductPage.module.css";
import { Button, Gallery, Rating } from "../../components";

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const item = data.find((el) => el.id === Number(productId)) as IItem;

  return (
    <div className={`container ${styles.product}`}>
      <Gallery images={new Array(6).fill("/src/assets/photo.jpg")} />
      <div className={styles.infoBox}>
        <div>
          <h1>{item.name}</h1>
          <div className={styles.productMeta}>
            <Rating rating={4} />
            <div className={styles.category}>
              electronics, selfie accessories
            </div>
          </div>
        </div>
        <div className={styles.stockStatus}>In Stock - Only 5 left!</div>
        <div className={styles.description}>
          The Essence Mascara Lash Princess is a popular mascara known for its
          volumizing and lengthening effects. Achieve dramatic lashes with this
          long-lasting and cruelty-free formula.
        </div>
        <div className={styles.terms}>
          <div>1 month warranty</div>
          <div>Ships in 1 month</div>
        </div>
        <div className={styles.productFooter}>
          <div className={styles.price}>
            <div className={styles.priceLeft}>
              <div className={styles.currentPrice}>7.17$</div>
              <div className={styles.oldPrice}>9.99$</div>
            </div>
            <div className={styles.discount}>
              Your discount: <span>14.5%</span>
            </div>
          </div>
          <Button
            content={"Add to cart"}
            width={176}
            height={62}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
