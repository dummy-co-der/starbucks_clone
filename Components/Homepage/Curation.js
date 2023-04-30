import Bestseller from '../../public/Bestseller.jpg'
import Drinks from '../../public/Drinks.jpg'
import Food from '../../public/Food.jpg'
import Merchandise from '../../public/Merchandise.jpg'
import CoffeeatHome from '../../public/Coffee At Home.jpg'
import ReadytoEat from '../../public/Ready to Eat.jpg'
import Image from 'next/image'
import style from './Homepagestyle/Curation.module.scss'

export const Curation = () => {
  return (
    <div class={style.curations}>
      <div class={style.curations_sub}>
        <h1 class={style.curations__title}>Handcrafted Curations</h1>
        <div class={style.curations__items}>
          <div class={style.curations__items__item}>
            <Image src={Bestseller} alt="bestseller" width={100} height={100} class={style.curations__items__item__itemimg} />
            <h5 class={style.curations__items__item__itemtitle}>Bestseller</h5>
          </div>
          <div class={style.curations__items__item}>
            <Image src={Drinks} alt="Drinks" width={100} height={100} class={style.curations__items__item__itemimg} />
            <h5 class={style.curations__items__item__itemtitle}>Drinks</h5>
          </div>
          <div class={style.curations__items__item}>
            <Image src={Food} alt="Food" width={100} height={100} class={style.curations__items__item__itemimg} />
            <h5 class={style.curations__items__item__itemtitle}>Food</h5>
          </div>
          <div class={style.curations__items__item}>
            <Image src={Merchandise} alt="Merchandise" width={100} height={100} class={style.curations__items__item__itemimg} />
            <h5 class={style.curations__items__item__itemtitle}>Merchandise</h5>
          </div>
          <div class={style.curations__items__item}>
            <Image src={CoffeeatHome} alt="Coffee at Home" width={100} height={100} class={style.curations__items__item__itemimg} />
            <h5 class={style.curations__items__item__itemtitle}>Coffee At Home</h5>
          </div>
          <div class={style.curations__items__item}>
            <Image src={ReadytoEat} alt="ready to eat" width={100} height={100} class={style.curations__items__item__itemimg} />
            <h5 class={style.curations__items__item__itemtitle}>Ready To Eat</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curation