import { useEffect } from "react";
import confetti from "canvas-confetti";
import Header from "../../components/birthday/header/Header";
import Content from "../../components/birthday/content/Content";
import styles from "./Birthday.module.css";
import image from "../../assets/unnamed.jpg";

const Birthday = () => {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div
      className={styles.birthdayCtn}
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <Header />
      <Content />
    </div>
  );
};

export default Birthday;
