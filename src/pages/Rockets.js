import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.inventory);
  const rocketsList = rockets.map((rocket) => {
    const {
      id, name, description, images,
    } = rocket;

    const [image] = images;

    const renderRocket = {
      id, name, description, image,
    };

    return (
      <article key={id} className="rocketItem">
        <Rocket rocketData={renderRocket} />
      </article>
    );
  });

  return (
    <>
      <section className="rocketsList">
        {rocketsList}
      </section>
    </>
  );
};

export default Rockets;
