import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = (props) => {
  const { rocketData: { name, description, image } } = props;

  return (
    <article className="rocketItem">
      <div className="rocketPhoto">
        <img className="rocketImage" src={image} alt={name} />
      </div>
      <div className="rocketInfo">
        <h4 className="rocketName">{name}</h4>
        <p className="rocketDescription">{description}</p>
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
