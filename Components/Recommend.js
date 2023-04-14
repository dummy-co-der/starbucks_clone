import Bestseller from '../public/Bestseller.jpg';
import Drinks from '../public/Drinks.jpg';
import Food from '../public/Food.jpg';
import Merchandise from '../public/Merchandise.jpg';
import CoffeeatHome from '../public/Coffee At Home.jpg';
import ReadytoEat from '../public/Ready to Eat.jpg';
import Image from 'next/image';
import styles from './Recommend.module.scss'
import leaf from '../public/leaf.svg';

const Recommend = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Barista Recommends</h2>
      <div className={styles.action}>
        <h2 className={styles.menu}>View Menu</h2>
        <div className={styles.image}>
        </div>
      </div>
    </div>
  );
};

export default Recommend;