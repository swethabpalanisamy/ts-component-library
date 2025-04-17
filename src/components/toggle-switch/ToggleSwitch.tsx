import React from 'react';
import styles from "./ToggleSwitch.module.css"

export const ToggleSwitch=()=> {
  return (
    <label className={styles.switch}>
    <input type="checkbox" id={styles.toggleSwitch}/>
    <span className={styles.slider}></span>
  </label>
  
  )
}

export default ToggleSwitch