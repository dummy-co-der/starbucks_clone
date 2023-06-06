import Bestseller from "../../public/Curations/Bestseller.jpg";
import Drinks from "../../public/Curations/Drinks.jpg";
import Food from "../../public/Curations/Food.jpg";
import Merchandise from "../../public/Curations/Merchandise.jpg";
import CoffeeAtHome from "../../public/Curations/CoffeeAtHome.jpg";
import ReadyToEat from "../../public/Curations/ReadytoEat.jpg";
import Image from "next/image";
import styles from "./Homepagestyle/Curation.module.scss";
import { motion,useAnimation } from "framer-motion";
import { useEffect } from "react";
export const Curation = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, []);

  return (
    <div class={styles.curations}>
      <div class={styles.curations_sub}>
        <h1 class={styles.curations__title}>Handcrafted Curations</h1>
        <motion.div
          className={styles.curations__items}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
           <motion.div
            className={styles.curations__items__item}
            variants={itemVariants}
          >
            <Image
              src={Bestseller}
              alt="bestseller"
              width={100}
              height={100}
              class={styles.curations__items__item__itemimg}
            />
            <h5 class={styles.curations__items__item__itemtitle}>Bestseller</h5>
          </motion.div>
          <motion.div
            className={styles.curations__items__item}
            variants={itemVariants}
          >
            <Image
              src={Drinks}
              alt="Drinks"
              width={100}
              height={100}
              class={styles.curations__items__item__itemimg}
            />
            <h5 class={styles.curations__items__item__itemtitle}>Drinks</h5>
          </motion.div>
          <motion.div
            className={styles.curations__items__item}
            variants={itemVariants}
          >
            <Image
              src={Food}
              alt="Food"
              width={100}
              height={100}
              class={styles.curations__items__item__itemimg}
            />
            <h5 class={styles.curations__items__item__itemtitle}>Food</h5>
            </motion.div>
            <motion.div
            className={styles.curations__items__item}
            variants={itemVariants}
          >
            <Image
              src={Merchandise}
              alt="Merchandise"
              width={100}
              height={100}
              class={styles.curations__items__item__itemimg}
            />
            <h5 class={styles.curations__items__item__itemtitle}>
              Merchandise
            </h5>
            </motion.div>
            <motion.div
            className={styles.curations__items__item}
            variants={itemVariants}
          >
            <Image
              src={CoffeeAtHome}
              alt="Coffee at Home"
              width={100}
              height={100}
              class={styles.curations__items__item__itemimg}
            />
            <h5 class={styles.curations__items__item__itemtitle}>
              Coffee At Home
            </h5>
            </motion.div>
            <motion.div
            className={styles.curations__items__item}
            variants={itemVariants}
          >
            <Image
              src={ReadyToEat}
              alt="ready to eat"
              width={100}
              height={100}
              class={styles.curations__items__item__itemimg}
            />
            <h5 class={styles.curations__items__item__itemtitle}>
              Ready To Eat
            </h5>
            </motion.div>
          </motion.div>
        </div>
        
      
    </div>
  );
};

export default Curation;
