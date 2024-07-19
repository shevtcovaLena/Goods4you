// import React from "react";
import style from "./Counter.module.css";
import { Button } from "../";
import {
  CartIcon,
  MinusIcon18,
  MinusIcon30,
  PlusIcon18,
  PlusIcon30,
} from "../Icons/Icons";
import { LoaderInLine } from "../LoaderInLine/LoaderInLine";

interface Props {
  count?: number;
  variation?: "small" | "large";
  onPlus: () => void;
  onMinus: () => void;
  max?: number;
  isLoading?: boolean; 
}

export function Counter({
  count = 0,
  variation = "small",
  onMinus,
  onPlus,
  max,
  isLoading=false,
}: Props) {
  if (max === 0) {
    return (
      <Button
        content={variation === "small" ? CartIcon : "Add to cart"}
        width={variation === "small" ? 50 : 176}
        height={variation === "small" ? 50 : 62}
        disable
      />
    );
  }

  if (count === 0) {
    return (
      <Button
        content={variation === "small" ? CartIcon : "Add to cart"}
        width={variation === "small" ? 50 : 176}
        height={variation === "small" ? 50 : 62}
        onClick={onPlus}
      />
    );
  }

  return (
    <div>
      <div
        className={`${style.counter} ${variation === "large" && style.large}`}
      >
        <Button
          content={variation === "small" ? MinusIcon18 : MinusIcon30}
          width={variation === "small" ? 50 : 70}
          height={variation === "small" ? 50 : 62}
          onClick={onMinus}
        />
        <div className={style.number}>
          {isLoading? 
          <LoaderInLine/>
           : `${count} ${count > 1 ? "items" : "item"}`}
        </div>
        {max && count >= max ? (
          <Button
            content={variation === "small" ? PlusIcon18 : PlusIcon30}
            width={variation === "small" ? 50 : 70}
            height={variation === "small" ? 50 : 62}
            disable
          />
        ) : (
          <Button
            content={variation === "small" ? PlusIcon18 : PlusIcon30}
            width={variation === "small" ? 50 : 70}
            height={variation === "small" ? 50 : 62}
            onClick={onPlus}
          />
        )}
      </div>
    </div>
  );
}
