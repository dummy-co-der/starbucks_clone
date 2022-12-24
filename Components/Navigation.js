import Image from 'next/image'
import logo from '../public/starbucks.png'
export default function Home() {
    return (
      <>
        <div className="flex flex-row flex-grow:1">
        <div className='logo p-4'>
        <Image src={logo} class="mx-14" alt='logo' height={40} width={40}/>
        </div>
        <div className='options flex flex-row grow'>
            <div className='flex flex-row space-x-20 mt-5 basis-1/2 '>
            <div><h2>Home</h2></div>
            <div><h2>Gift</h2></div>
            <div><h2>Order</h2></div>
            <div><h2>Pay</h2></div>
            <div><h2>Store</h2></div>
            </div>
        <div className=''>
        <div class="flex justify-center mt-5">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex items-stretch w-full mb-4 flex-row">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Looking For Something Specific?" aria-label="Search" aria-describedby="button-addon2"/>
      <button class="btn inline-block px-6 py-2.5 bg-[#1e3932] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center ml-10" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
        </div>
        </div>
      </div>
      </>
    )
  }