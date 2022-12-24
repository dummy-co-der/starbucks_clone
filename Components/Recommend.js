import Bestseller from '../public/Bestseller.jpg'
import Drinks from '../public/Drinks.jpg'
import Food from '../public/Food.jpg'
import Merchandise from '../public/Merchandise.jpg'
import CoffeeatHome from '../public/Coffee At Home.jpg'
import ReadytoEat from '../public/Ready to Eat.jpg'
import leaf from '../public/leaf.svg' 
import Image from 'next/image'
const Recommend = () => {
    return (
        <div className='bg-[#edebe9]'>
        <div className='justify-between py-4 flex flex-row '>
            <h2 className=' mt-5 ml-4 text-[#1e393]'>Barista Recommends</h2>
            <div className='flex flex-row'>
            <h2 className='text-[#00754a] mt-5 mr-10'>View Menu</h2>
            <Image src={leaf} width={60} height={60} alt='photo'/>
            </div>
        </div>
    </div>
    )
  }
  
export default Recommend