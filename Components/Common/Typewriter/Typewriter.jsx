import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './Typewriter.module.scss'
const Typewriter = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Preparing Deleciousness for you......'],
      typeSpeed: 100,
      backSpeed: 150,
      loop: true
    };
    
    const typed = new Typed(typeRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className={styles.textstyle} ref={typeRef}></span>;
};

export default Typewriter;
