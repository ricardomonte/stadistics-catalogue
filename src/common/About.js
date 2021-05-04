import React from 'react';
import GameStyles from '../styles/About.module.css';

const About = () => (
  <>
    <div className={GameStyles.about} />
    <div className={GameStyles.aboutText}>
      <h1 className={GameStyles.title}>About</h1>
      <p className={GameStyles.aboutInfo}>
        FGPG comes from From Gamers To Gamers we look
        <br />
        We look for the top games on the market, and we give you the details of
        them.
        <br />
        We dream that everyone can know the games that everyone talks about.
      </p>
    </div>
  </>
);

export default About;
