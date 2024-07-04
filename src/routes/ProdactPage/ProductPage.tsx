import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
import { IItem } from "../../types/types";
import styles from "./ProductPage.module.css";
import { Rating } from "../../components";

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const item: IItem = data.find((el) => el.id === Number(productId));

  return (
    <div className={`container ${styles.product}`}>
      <div className={styles.imageBox}>
        <div className={styles.bigImage}>
          <img src="/src/assets/photo.jpg" alt="Product" />
        </div>
        <div className={styles.gallery}>
          <div className={`${styles.galleryItem} ${styles.selected}`}>
            <img src="/src/assets/photo.jpg" alt="Product" />
          </div>
          <div className={styles.galleryItem}>
            <img src="/src/assets/photo.jpg" alt="Product" />
          </div>
          <div className={styles.galleryItem}>
            <img src="/src/assets/photo.jpg" alt="Product" />
          </div>
          <div className={styles.galleryItem}>
            <img src="/src/assets/photo.jpg" alt="Product" />
          </div>
          <div className={styles.galleryItem}>
            <img src="/src/assets/photo.jpg" alt="Product" />
          </div>
          <div className={styles.galleryItem}>
            <img src="/src/assets/photo.jpg" alt="Product" />
          </div>
        </div>
      </div>
      <div className={styles.infoBox}>
      <h1 className="product-title">Essence Mascara Lash Princess</h1>
        <div className={styles.productMeta}>
            <Rating rating={4}/>
            <div className="category">electronics, selfie accessories</div>
        </div>
        <hr/>
        <div className="stock-status">In Stock - Only 5 left!</div>
        <hr/>
        <div className="product-description">
            The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
        </div>
        <hr/>
        <div className="warranty">1 month warranty</div>
        <div className="shipping">Ships in 1 month</div>
        <hr/>
        <div className="product-footer">
            <div className="price">
                <div className="current-price">7.17$</div>
                <div className="old-price">9.99$</div>
            </div>
            <div className="discount">Your discount: <span>14.5%</span></div>
            <button className="add-to-cart-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
