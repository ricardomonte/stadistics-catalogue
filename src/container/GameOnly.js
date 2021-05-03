import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadScreenshots } from '../actions';
import ErrorServer from '../components/ErrorServer';
import GameStyle from '../styles/OneGame.module.css';

const GameOnly = ({
  errors, match, loadedOneGame, images,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    loadedOneGame(match.params.id);
  }, []);
  const history = useHistory();
  const goBack = () => {
    history.push('/');
  };
  if (errors.errorImage) {
    return <ErrorServer name={errors.errorImage} />;
  }
  return (
    <div className={GameStyle.gameTotal}>
      <img
        alt="something"
        src={`https:${images.cover}`}
        className={GameStyle.gameImage}
      />
      <div className={GameStyle.gameContainer}>
        <div className={GameStyle.gameInfo}>
          <h1>{images.name}</h1>
          <p className={GameStyle.genre}>{images.genre}</p>
          <h2>{images.storyline !== '' ? 'Storyline' : 'Summary'}</h2>
          <p className={GameStyle.info}>
            {images.storyline !== '' ? images.storyline : images.summary}
          </p>
        </div>
        <div className={GameStyle.gameScreen}>
          <h2 className={GameStyle.gameScreenTitle}>Screenshots</h2>
          <img
            alt="something"
            src={`https:${images.screen1}`}
            className={GameStyle.gameScreenImg}
          />
          <img
            alt="something"
            src={`https:${
              images.screen2 !== '' ? images.screen2 : images.screen1
            }`}
            className={GameStyle.gameScreenImg}
          />
          <img
            alt="something"
            src={`https:${
              images.screen3 !== '' ? images.screen3 : images.screen1
            }`}
            className={GameStyle.gameScreenImg}
          />
        </div>
        <div className={GameStyle.gamePlatforms}>
          <h2>Platforms</h2>
          <div className={GameStyle.gameImgPlat}>
            <div className={GameStyle.gamePlatLogo}>
              <img alt="something" src={`https:${images.PClogo}`} />
              <div>
                <h5>Release:</h5>
                <p>{images.PCrelease}</p>
              </div>
            </div>
            <div className={GameStyle.gamePlatLogo}>
              <img alt="something" src={`https:${images.PS4logo}`} />
              <div>
                <h5>Release:</h5>
                <p>{images.PS4release}</p>
              </div>
            </div>
            <div className={GameStyle.gamePlatLogo}>
              <img alt="something" src={`https:${images.XONElogo}`} />
              <div>
                <h5>Release:</h5>
                <p>{images.XONErelease}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={GameStyle.containerBtn}>
        <button className={GameStyle.backBtn} type="button" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errors: state.manageErr,
  images: state.image,
});

const mapDispatchToProps = (dispatch) => ({
  loadedOneGame: (id) => dispatch(loadScreenshots(id)),
});

GameOnly.propTypes = {
  errors: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  loadedOneGame: PropTypes.func.isRequired,
  images: PropTypes.instanceOf(Object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(GameOnly);
