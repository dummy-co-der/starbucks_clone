import styles from "./Giftpagestyle/Anytime.module.scss";
import ThankyouList from "./ThankyouList";

const Thankyou = () => {
  return (
    <div className={styles.anytime}>
      <div className={styles.anytime_heading}>
        <h2> Thankyou </h2>
      </div>
      <div className={styles.anytime_content} />
      <ThankyouList />
    </div>
  );
};

export default Thankyou;
