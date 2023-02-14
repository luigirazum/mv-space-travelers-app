import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { rocketData: { name, description, image } } = props;

  return (
    <>
      <section className="picture">
        <img src={image} alt={name} />
      </section>
      <section className="info">
        <h4 className="rocketName">{name}</h4>
        <p className="rocketDescription">{description}</p>
      </section>
    </>
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
