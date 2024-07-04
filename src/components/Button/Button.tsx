import React from 'react'
import styles from './Button.module.css'

interface Props {
    content: React.ReactNode;
    width: number;
    height: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    role?: string;
    disable?: boolean;
}

export function Button({content, width, height, onClick, role, disable=false }:Props) {
    
    return (
        <button disabled={disable} className={styles.button} style={{width: `${width}px`, height: `${height}px`}} onClick={(e) => onClick(e)} role={role? role : 'button'} >{content}</button>
    )
}


