import Bestseller from '../../public/Curations/Bestseller.jpg'
import Drinks from '../../public/Curations/Drinks.jpg'
import Food from '../../public/Curations/Food.jpg'
import Merchandise from '../../public/Curations/Merchandise.jpg'
import CoffeeAtHome from '../../public/Curations/CoffeeAtHome.jpg'
import ReadyToEat from '../../public/Curations/ReadytoEat.jpg'
import Image from 'next/image'
import styles from './Homepagestyle/Curation.module.scss'

export const Curation = () => {
  return (
    <div class={styles.curations}>
      <div class={styles.curations_sub}>
        <h1 class={styles.curations__title}>Handcrafted Curations</h1>
        <div class={styles.curations__items}>
          <div class={styles.curations__items__item}>
            <Image src={Bestseller} alt="bestseller" width={100} height={100} class={styles.curations__items__item__itemimg} />
            <h5 class={styles.curations__items__item__itemtitle}>Bestseller</h5>
          </div>
          <div class={styles.curations__items__item}>
            <Image src={Drinks} alt="Drinks" width={100} height={100} class={styles.curations__items__item__itemimg} />
            <h5 class={styles.curations__items__item__itemtitle}>Drinks</h5>
          </div>
          <div class={styles.curations__items__item}>
            <Image src={Food} alt="Food" width={100} height={100} class={styles.curations__items__item__itemimg} />
            <h5 class={styles.curations__items__item__itemtitle}>Food</h5>
          </div>
          <div class={styles.curations__items__item}>
            <Image src={Merchandise} alt="Merchandise" width={100} height={100} class={styles.curations__items__item__itemimg} />
            <h5 class={styles.curations__items__item__itemtitle}>Merchandise</h5>
          </div>
          <div class={styles.curations__items__item}>
            <Image src={CoffeeAtHome} alt="Coffee at Home" width={100} height={100} class={styles.curations__items__item__itemimg} />
            <h5 class={styles.curations__items__item__itemtitle}>Coffee At Home</h5>
          </div>
          <div class={styles.curations__items__item}>
            <Image src={ReadyToEat} alt="ready to eat" width={100} height={100} class={styles.curations__items__item__itemimg} />
            <h5 class={styles.curations__items__item__itemtitle}>Ready To Eat</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curation