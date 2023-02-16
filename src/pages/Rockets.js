import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Rocket from '../components/Rocket/Rocket';
import './Rockets.css';

const selectRocketsIds = (state) => state.rockets.inventory.map((rocket) => rocket.id);

const Rockets = () => {
  const rocketsIds = useSelector(selectRocketsIds, shallowEqual);

  const renderedRockets = rocketsIds.map((rocketId) => (
    <Rocket key={rocketId} id={rocketId} />
  ));

  return (
    <>
      <section className="rocketsList">
        {renderedRockets}
      </section>
    </>
  );
};

export default Rockets;
