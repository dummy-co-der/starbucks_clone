import React, { useState } from 'react'
import { Input } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import style from './Orderpagestyle/StoreLocation.module.scss'
import Image from 'next/image';
import logo from '../../public/search.png'
const StoreLocation = () => {
  const [close,setClose] = useState(true);
  return (
    <div className={style.storediv}>
        <div className={style.storesubdiv}>
        <div className={style.storesearch}>
        {/* <div className={style.searchbackg}> */}
        {/* <SearchOutlined/> */}
        <Image src={logo} className={style.image} width={80} height={80}/>
        {/* </div> */}
        <Input placeholder="No Store Selected" bordered={false} style={{ borderBottom: '2px solid #00754A', color: 'white' , '::placeholder': { color: 'white' }}} />
        <div className={style.clock}>
        <div className={style.clocklogo}><ClockCircleOutlined/></div>
        00mins
        </div>
        </div>
        <div >
            {close&&<div className={style.notfound}>
            <Image src={logo} className={style.image} width={80} height={80}/>
                {/* <div className={style.searchbackg}>
               <SearchOutlined/>
               </div> */}
               <div>
                <h4>No store Found</h4>
                <h6>Looks like there are no stores around the provided location.</h6>
               </div>
               <div className={style.close} onClick={()=>setClose(false)}>
                 X
               </div>
            </div>}
        </div>
    </div>
    </div>
  )
}

export default StoreLocation