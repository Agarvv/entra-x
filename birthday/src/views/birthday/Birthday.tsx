import { useEffect } from "react";
import confetti from "canvas-confetti";
import Header from "../../components/birthday/header/Header";
import Content from "../../components/birthday/content/Content";
import styles from "./Birthday.module.css"


const Birthday = () => {
    useEffect(() => {

        confetti({
      particleCount: 200,  
      spread: 70,          
      origin: { y: 0.6 }   
    });

    }, [])
    return (
       <div className={styles.birthdayCtn}>
          <Header /> 
          <Content />

          
       </div>
    )
}

export default Birthday; 