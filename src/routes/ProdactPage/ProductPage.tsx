// import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { Counter, Gallery, Rating } from "../../components";
import { Helmet } from "react-helmet-async";
import { useGetProductByIdQuery } from "../../features/products/productsApi";
import { getPrice } from "../../helpers/getPrice";

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const { data, error, isLoading } = useGetProductByIdQuery(productId as string);

  return (
    <>
    <Helmet>
      <title>{`${data?.title} | Goods4you`}</title>
    </Helmet>
    <div className={`container ${styles.product}`}>
        <Gallery images={data?.images as string[]} />
        <div className={styles.infoBox}>
          <div>
            <h1>{data?.title}</h1>
            <div className={styles.productMeta}>
              <Rating rating={Math.round(data?.rating || 0)} />
              <div className={styles.category}>
                {data?.tags.join(", ")}
              </div>
            </div>
          </div>
          <div className={styles.stockStatus}>{data?.stock? `${data?.availabilityStatus} - Only ${data?.stock} left!`: `${data?.availabilityStatus}`}</div>
          <div className={styles.description}>
            {data?.description}
          </div>
          <div className={styles.terms}>
            <div>{data?.warrantyInformation}</div>
            <div>{data?.shippingInformation}</div>
          </div>
          <div className={styles.productFooter}>
            <div className={styles.price}>
              <div className={styles.priceLeft}>
                <div className={styles.currentPrice}>{`${getPrice(data?.price, data?.discountPercentage)}$`}</div>
                <div className={styles.oldPrice}>{`${data?.price}$`}</div>
              </div>
              <div className={styles.discount}>
                Your discount: <span>{`${data?.discountPercentage}%`}</span>
              </div>
            </div>
            <Counter count={0} variation="large" />
          </div>
        </div>
      </div>
      </>
  );
}
