import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className="sectionContainer">
      <div className={styles.about}>
        <h2 className="sectionTitle">Me conheça</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptates corrupti facilis optio odio fugiat, veritatis tempore.
          Dolorem nisi quo, cupiditate provident id, ab, fugit laborum modi
          exercitationem voluptate nobis. Nam aut laboriosam voluptatem harum,
          omnis obcaecati aliquam ducimus mollitia iste atque cum eius quo
          perferendis doloremque. Autem natus eos expedita deserunt
          reprehenderit amet, esse perferendis magni debitis suscipit laborum.
        </p>
      </div>
    </section>
  );
};

export default About;
