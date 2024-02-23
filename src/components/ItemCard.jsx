import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemcontext";

function ItemCard({ name, price, id, image}) {

  //destrcturing directly
 const {handleAdd,handleRemove} = useValue();

  // const handleAdd = () => {
  //   setTotal(total+price);
  //   setItem(item+1);
  // };

  // const handleRemove = () => {
  //   if(total <= 0){
  //     return;
  //   }
  //   setTotal((prevState)=> prevState - price);
  //   setItem(item-1);
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      
        <img src={image} alt={name}/>
      
      <div className={styles.itemButtonsWrapper}>
        <button onClick={() => handleAdd({id, name, price})}>
            <span class="circle1"></span>
            <span class="circle2"></span>
            <span class="circle3"></span>
            <span class="circle4"></span>
            <span class="circle5"></span>
            <span class="text">Add</span>
        </button>
        <button className={styles.removebutton} onClick={() => handleRemove(id)}>
            <span class="circle1"></span>
            <span class="circle2"></span>
            <span class="circle3"></span>
            <span class="circle4"></span>
            <span class="circle5"></span>
            <span class="text">Remove</span>
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
