import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';
import './Rocket.css';

const Rocket = (props) => {
  const {
    rocketData: rocket,
    rocketData: {
      name, description, image,
    },
  } = props;

  const dispatch = useDispatch();

  return (
    <article className="rocketItem">
      <div className="rocketPhoto">
        <img className="rocketImage" src={image} alt={name} />
      </div>
      <div className="rocketInfo">
        <h4 className="rocketName">{name}</h4>
        <p className="rocketDescription">{description}</p>
        <button
          type="button"
          className="btn btn-rReserve"
          onClick={() => dispatch(reserveRocket(rocket.id))}
        >
          Reserve Rocket
        </button>
      </div>
    </article>
  );
};

Rocket.propTypes = {
  rocketData: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Rocket;
