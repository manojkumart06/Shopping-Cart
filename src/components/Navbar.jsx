import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemcontext";

function Navbar() {
  const {item,total,resetButton,toggleCart} = useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.navButtonsWrapper}>
        <h1>Cart</h1><img onClick={() => toggleCart()} alt = "cart-icon"src="https://cdn-icons-png.flaticon.com/128/13637/13637462.png" className = {styles.icon_image} />
        <button className={styles.navButton} onClick={() => resetButton()}>Reset</button>
      </div>
      
    </div>
  );
}

export default Navbar;
