import React, { useState } from 'react'
import styles from './Signup.module.scss'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import Typewriter from '../Common/Typewriter/Typewriter'
const Signup = () => {
  const [login,setlogin] = useState(true)
  function Signupchange(){
    setlogin(!login);
  }
  function Signup()
   {
    if(login){
      return(
        <div className={styles.loginbox}>
            <div className={styles.loginboxelements}>
            <h4>Your Email</h4>
            <Input placeholder="Email" prefix={<UserOutlined />} />
            </div>
            <div className={styles.loginboxelements}>
            <h4>Your password</h4>
            <Input placeholder="password" prefix={<LockOutlined />} />
            </div>
            <center>
            <Button className={styles.signinbtn}>Create Account</Button>
            </center>
            {/* <div className={styles.dont }>
              <h4>Dont have an Account?</h4>
            </div> */}
            </div>
      )
    }
    else return(
      <div className={styles.loginbox}>
             <div className={styles.loginboxelements}>
            
            <h4 style={{color:'#00754a'}}>Your Name</h4>
            <Input placeholder="Email" prefix={<UserOutlined />} />
            </div>
            <div className={styles.loginboxelements}>
            
            <h4 style={{color:'#00754a'}}>Your Email</h4>
            <Input placeholder="Email" prefix={<MailOutlined />} />
            </div>
            <div className={styles.loginboxelements}>
            <h4 style={{color:'#00754a'}}>Your password</h4>
            <Input placeholder="password" prefix={<LockOutlined />} />
            </div>
            <center>
            <Button className={styles.signinbtn}>Create Account</Button>
            </center>
            {/* <div className={styles.dont }>
              <h4>Dont have an Account?</h4>
            </div> */}
            </div>
    )
   }
   function Headingtitle(){
    console.log(login)
    if(login===true){
      return(
        <h3 style={{color:'#00754a'}}>Good to see you again</h3>
      )
    }
    else{
      return(
        <h3 style={{color:'#00754a'}}>Lets Create an Account for you</h3>
      )
    }
   }
  return (
    <div className={styles.logindiv}>
           
        <div className={styles.loginsub}>
        <div className={styles.anim}>
        {/* <div style={{fontSize:'2rem',color:'#fff9ed',margin:'0px'}}><Typewriter/></div> */}
        <div style={{height:'90vh',paddingBottom:'20px',marginRight:'70px'}}>
         <img src= '/Login-images/starbucks.gif' alt='starbucks gif'/>
         </div>
        </div>
        <div className={styles.loginacc}>
        <center>
            <img src='/starbucks.png' alt='logo'/>
           <Headingtitle/>
            </center>
            <div className={styles.loginswitch}>
              <div onClick={Signupchange}  className={login?styles.loginswitchbtnselleft:styles.loginswitchbtn}>Login In</div>
              <div  onClick={Signupchange} className={!login?styles.loginswitchbtnselright:styles.loginswitchbtnright}>Signup</div>
            </div>
            <Signup/>
            
            
        </div>
        
        </div>
        <div>

        </div>
    </div>
  )
}

export default Signup