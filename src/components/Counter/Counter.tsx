// import React from "react";
import style from "./Counter.module.css";
import { Button } from "../";
import { CartIcon, MinusIcon18, MinusIcon30, PlusIcon18, PlusIcon30 } from "../Icons/Icons";

interface Props {
  count?: number;
  variation?: "small" | "large";
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // onPlus: () => void;
  // onMinus: () => void;
}

export function Counter({ count = 0, variation = "small", /*onMinus, onPlus*/ }: Props) {
  return (
    <div>
      {count === 0 ? (
        <Button content={variation === "small"? CartIcon : "Add to cart"} width={variation === "small"? 50: 176} height={variation === "small"? 50:62} onClick={() => {}} />
      ) : (
        <div className={style.counter}>
          <Button content={variation === "small"? MinusIcon18 : MinusIcon30} width={variation === "small"? 50 : 70} height={variation === "small"? 50 : 62} onClick={() => {}} />
          <div className={style.number}>{`${count} ${
            count > 1 ? "items" : "item"
          }`}</div>
          <Button content={variation === "small"? PlusIcon18 : PlusIcon30} width={variation === "small"? 50 : 70} height={variation === "small"? 50 : 62} onClick={() => {}} />
        </div>
      )}
    </div>
  );
}
