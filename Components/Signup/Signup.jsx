import React, { useState } from "react";
import styles from "./Signup.module.scss";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Typewriter from "../Common/Typewriter/Typewriter";
import { useDispatch, useSelector } from "react-redux";
import { handleloginsubmit } from "@/auth/action/user";

const Signup = () => {
  const [login, setlogin] = useState(true);
  function Signupchange() {
    setlogin(!login);
  }

  function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.USERLOGIN);

    const onLogin = async (e) => {
      e.preventDefault();
      dispatch(handleloginsubmit(email, password));
    };

    if (login) {
      return (
        <div className={styles.loginbox}>
          <div className={styles.loginboxelements}>
            <h4>Your Email</h4>
            <Input
              placeholder="Email"
              prefix={<UserOutlined />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.loginboxelements}>
            <h4>Your password</h4>
            <Input
              placeholder="Password"
              prefix={<LockOutlined />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <center>
            <Button className={styles.signinbtn} onClick={onLogin}>
              Create Account
            </Button>
          </center>
        </div>
      );
    } else
      return (
        <div className={styles.loginbox}>
          <div className={styles.loginboxelements}>
            <h4 style={{ color: "#00754a" }}>Your Name</h4>
            <Input placeholder="Email" prefix={<UserOutlined />} />
          </div>
          <div className={styles.loginboxelements}>
            <h4 style={{ color: "#00754a" }}>Your Email</h4>
            <Input placeholder="Email" prefix={<MailOutlined />} />
          </div>
          <div className={styles.loginboxelements}>
            <h4 style={{ color: "#00754a" }}>Your password</h4>
            <Input placeholder="password" prefix={<LockOutlined />} />
          </div>
          <center>
            <Button onClick={onRegister} className={styles.signinbtn}>
              Create Account
            </Button>
          </center>
        </div>
      );
  }

  function Headingtitle() {
    console.log(login);
    if (login === true) {
      return <h3 style={{ color: "#00754a" }}>Good to see you again</h3>;
    } else {
      return (
        <h3 style={{ color: "#00754a" }}>Lets Create an Account for you</h3>
      );
    }
  }
  return (
    <div className={styles.logindiv}>
      <div className={styles.loginsub}>
        <div className={styles.anim}>
          {/* <div style={{fontSize:'2rem',color:'#fff9ed',margin:'0px'}}><Typewriter/></div> */}
          <div
            style={{
              height: "90vh",
              paddingBottom: "20px",
              marginRight: "70px",
            }}
          >
            <img src="/Login-images/starbucks.gif" alt="starbucks gif" />
          </div>
        </div>
        <div className={styles.loginacc}>
          <center>
            <img src="/starbucks.png" alt="logo" />
            <Headingtitle />
          </center>
          <div className={styles.loginswitch}>
            <div
              onClick={Signupchange}
              className={
                login ? styles.loginswitchbtnselleft : styles.loginswitchbtn
              }
            >
              Login In
            </div>
            <div
              onClick={Signupchange}
              className={
                !login
                  ? styles.loginswitchbtnselright
                  : styles.loginswitchbtnright
              }
            >
              Signup
            </div>
          </div>
          <Signup />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Signup;
