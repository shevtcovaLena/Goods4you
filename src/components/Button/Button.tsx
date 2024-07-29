import React from "react";
import styles from "./Button.module.css";

interface Props {
  content: React.ReactNode;
  width: number;
  height: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  role?: string;
  disable?: boolean;
  testid?: string;
}

export function Button({
  content,
  width,
  height,
  onClick,
  role,
  disable = false,
  testid,
}: Props) {
  return (
    <button
      disabled={disable}
      className={styles.button}
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={onClick? onClick : () => {}}
      role={role ? role : "button"}
      data-testid={testid}
    >
      {content}
    </button>
  );
}
