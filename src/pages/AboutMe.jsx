import React from 'react';
import styles from './styles/AboutMe.module.css';

const AboutMe = () => (
  <section className={styles.bioSection}>
    <img src="./src/assets/images/face.jpg " alt="Avatar" className={styles.avatar} />
    <p className='container card flex justify-content-center'>
      Hi, I'm Brandon! I'm a web developer based in Middle Georgia. I enjoy building
      beautiful and functional websites. When I'm not coding, you can find me
      exploring the woods, looking for adventures with my family, or slaying on Tarkov. I'm currently seeking new opportunities and can't wait to see
      what's next in my coding journey!
    </p>
  </section>
);

export default AboutMe;
