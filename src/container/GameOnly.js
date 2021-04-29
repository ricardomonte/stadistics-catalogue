import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadScreenshots } from '../actions';

const GameOnly = ({ match, loadedOneGame, images }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    loadedOneGame(match.params.id).catch((error) => {
      alert(`loading games failed ${error}`);
    });
  }, []);

  return (
    <div>
      <img alt="something" src={`https:${images.cover}`} />
      <div>
        <h4>{images.name}</h4>
        <p>{images.genres}</p>
        <h3>{images.storyline !== '' ? 'Storyline' : 'Summary'}</h3>
        <p>{images.storyline !== '' ? images.storyline : images.summary}</p>
        <div>
          <h4>Screenshots</h4>
          <img alt="something" src={`https:${images.screen1}`} />
          <img
            alt="something"
            src={`https:${
              images.screen2 !== '' ? images.screen2 : images.screen1
            }`}
          />
          <img
            alt="something"
            src={`https:${
              images.screen3 !== '' ? images.screen3 : images.screen1
            }`}
          />
        </div>
        <div>
          <h4>Platforms</h4>
          <div>
            <img alt="something" src={`https:${images.PClogo}`} />
            <p>{images.PC}</p>
            <div>
              <h5>Release:</h5>
              <p>{images.PCrelease}</p>
            </div>
          </div>
          <div>
            <img alt="something" src={`https:${images.PS4logo}`} />
            <p>{images.PS4}</p>
            <div>
              <h5>Release:</h5>
              <p>{images.PS4release}</p>
            </div>
          </div>
          <div>
            <img alt="something" src={`https:${images.XONElogo}`} />
            <p>{images.XONE}</p>
            <div>
              <h5>Release:</h5>
              <p>{images.XONErelease}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.image,
});

const mapDispatchToProps = (dispatch) => ({
  loadedOneGame: (id) => dispatch(loadScreenshots(id)),
});

GameOnly.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  loadedOneGame: PropTypes.func.isRequired,
  images: PropTypes.instanceOf(Object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(GameOnly);
