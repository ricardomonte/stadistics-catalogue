import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import GameStyle from '../styles/Heroe.module.css';

const Heroe = ({ image }) => (
  <Carousel className={GameStyle.carrouselStyle}>
    {image.map((image) => (
      <div id="helo" key={`${image.name}heroe`}>
        <img
          alt="hero"
          src={`https:${image.cover.replace('cover_big', 'screenshot_huge')}`}
          className={GameStyle.heroeImage}
        />
        <div className={GameStyle.containerText}>
          <h1 className={GameStyle.heroeTitle}>{image.name}</h1>
          <h2 className={GameStyle.heroeRating}>
            {`${Math.floor(image.rating)} %`}
          </h2>
        </div>
      </div>
    ))}
  </Carousel>
);

Heroe.propTypes = {
  image: PropTypes.instanceOf(Array).isRequired,
};

export default Heroe;
