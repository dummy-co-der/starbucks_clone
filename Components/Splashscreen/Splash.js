import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import styles from './Splashscreenstyle/Splash.module.scss'

const Splash = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#edebe9' }}>
          {/* <img src="preloader.gif" alt="Preloader" /> */}
          {/* <h2 style={{color: '#00754a'}}> Brewing fresh coffee for You... </h2> */}
          <Typewriter
            options={{
              strings: ['Brewing fresh coffee for You...'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
              cursor: '_',
              wrapperClassName: styles['typewriter-wrapper'],
              cursorClassName: styles['typewriter-cursor'],
              stringClassName: styles['typewriter-string']
            }}
          />
          <img alt="Preloader" src={'/Splashscreen-images/preloader.gif'} style={{ height: '50%' }} />
        </div>
      )
        :
        (
          <div>
            {children}
          </div>
        )
      }
    </div>
  );
};

export default Splash;
