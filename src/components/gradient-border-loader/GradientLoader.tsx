import React from "react";
import styles from "./GradientLoader.module.css";

const GradientLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default GradientLoader;
