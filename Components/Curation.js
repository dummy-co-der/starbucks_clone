import Bestseller from '../public/Bestseller.jpg'
import Drinks from '../public/Drinks.jpg'
import Food from '../public/Food.jpg'
import Merchandise from '../public/Merchandise.jpg'
import CoffeeatHome from '../public/Coffee At Home.jpg'
import ReadytoEat from '../public/Ready to Eat.jpg'
import Image from 'next/image'
export const Curation = () => {
  return (
    <div>
        <h1 className='ml-28 py-4 text-[#1e393] text-2xl font-semibold'>Handcrafted Curations</h1>
       <div className="flex space-x-10 flex-row items-center justify-center">
        <div className='p-6 transform transition duration-500 cursor-pointer hover:scale-90'>
            <Image src={Bestseller} class="rounded-full cursor-pointer bg-black" alt='bestseller' width={125} height={125}/>
            <center><h2>Bestseller</h2></center>
        </div>
        <div className='p-6 transform transition duration-500 cursor-pointer hover:scale-90'>
            <Image src={Drinks} class="rounded-full cursor-pointer" alt='Drinks' width={125} height={125}/>
            <center><h2>Drinks</h2></center>
        </div>
        <div className='p-6 transform transition duration-500 cursor-pointer hover:scale-90'>
            <Image src={Food} class="rounded-full cursor-pointer" alt='Food' width={125} height={125}/>
            <center><h2>Food</h2></center>
        </div>
        <div className='p-6 transform transition duration-500 cursor-pointer hover:scale-90'>
            <Image src={Merchandise} class="rounded-full cursor-pointer" alt='Merchandise' width={125} height={125}/>
            <center><h2>Merchandise</h2></center>
        </div>
        <div className='p-6 transform transition duration-500 cursor-pointer hover:scale-90'>
            <Image src={CoffeeatHome} class="rounded-full cursor-pointer" alt='Coffee at Home' width={125} height={125}/>
            <center><h2>Coffee At Home</h2></center>
        </div>
        <div className='p-6 transform transition duration-500 cursor-pointer hover:scale-90'>
            <Image src={ReadytoEat} class=" rounded-full" alt='ready to eat' width={125} height={125}/>
            <center><h2>Ready To Eat</h2></center>
        </div>
       </div>
    </div>
  )
}

export default Curation