import React from 'react';
import styles from "./Button.module.css"

type Props={
    children:React.ReactNode;
    onClick?:()=> void;
}
export const SpectrumEdgeButton=({children,onClick}:Props)=> {
  return (
    <button className={`${styles.btn}`} onClick={onClick}>{children}</button>
  )
}
