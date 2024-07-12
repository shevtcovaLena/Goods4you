// import React from "react";
import { ICartItem, IItem } from "../../types/types";
import styles from "./ItemCard.module.css";
import { Counter, Preview } from "..";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../features/hooks";
import { getPrice } from "../../helpers/getPrice";

interface ItemCardProps {
  item: IItem;
}

export function ItemCard({ item }: ItemCardProps) {
const cart= useAppSelector((store) => store.cartSlice.cartInfo)

const productInCart = cart.products.find((product: ICartItem) => product.id === item.id);
const productQuantity = productInCart ? productInCart.quantity : 0;

return (
    <Link to={`/product/${item.id}`} className={styles.link}>
      <div className={styles.cardBox}>
        <div className={styles.imgBox}>
          <div className={styles.hover}>Show details</div>
          <Preview image={item.thumbnail}/>
        </div>
        <div className={styles.extra}>
          <div className={styles.extraLeft}>
            <p>{item.title}</p>
            <span>{`${getPrice(item.price, item.discountPercentage)} $`}</span>
          </div>
          <div onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            }}>
          <Counter count={productQuantity} />
          </div>
        </div>
      </div>
    </Link>
  );
}
