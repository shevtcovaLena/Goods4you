import { ICartItem } from "../../types/types";
import styles from "./CartItem.module.css";
import { Link } from "react-router-dom";
import { Counter } from "../";
import { getPrice } from "../../helpers/getPrice";
import { useAppSelector } from "../../redux/hooks";

interface Props {
  item: ICartItem;
  count: number;
  current: boolean;
  onPlus: () => void;
  onMinus: () => void;
  onDelete: () => void;
  onClick: () => void;
}

export function CartItem({
  item,
  count,
  current,
  onPlus,
  onMinus,
  onDelete,
  onClick,
}: Props) {

  const isLoading: boolean = useAppSelector((store) => store.cartSlice.isLoading)

  return (
    <div
      className={`${styles.card} ${current ? styles.active : ""}`}
      onClick={onClick}
    >
      <div
        className={styles.leftPart}
        style={{ opacity: count === 0 ? "0.65" : "" }}
      >
        <div className={styles.image}>
          <img src={item.thumbnail} alt="Item in cart" />
        </div>
        <div className={styles.extra}>          
            <Link to={`/product/${item.id}`}>
              <p>{item.title}</p>
            </Link>
            <span>{`${getPrice(item.price, item.discountPercentage)} $`}</span>          
        </div>
      </div>
      <div className={styles.rightPart}>
          <Counter count={count} onMinus={onMinus} onPlus={onPlus} isLoading={isLoading}/>
          {count !== 0 && <button className={styles.delete} onClick={onDelete}>Delete</button>}
      </div>
    </div>
  );
}
