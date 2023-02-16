import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservedRocket, reserveRocket } from '../../redux/rockets/rockets';

const selectRocketById = (state, rocketId) => state
  .rockets.inventory.find((rocket) => rocket.id === rocketId);

const Rocket = ({ id }) => {
  const rocket = useSelector((state) => selectRocketById(state, id));

  const dispatch = useDispatch();

  const handleBookRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancelReservedRocket = (id) => {
    dispatch(cancelReservedRocket(id));
  };

  const { name, description, images } = rocket;
  const [image] = images;

  return (
    <article className="rocketItem">
      <div className="rocketPhoto">
        <img className="rocketImage" src={image} alt={name} />
      </div>
      <div className="rocketInfo">
        <h4 className="rocketName">
          {name}
          {rocket.reserved
            && <span className="badge rktBadge resBadge">Reserved</span>}
        </h4>
        <p className="rocketDescription">{description}</p>
        {!rocket.reserved ? (
          <button
            type="button"
            className="btn btn-rReserve"
            onClick={() => handleBookRocket(id)}
          >
            Book this Rocket
          </button>
        )
          : (
            <button
              type="button"
              className="btn btn-cReserve"
              onClick={() => handleCancelReservedRocket(id)}
            >
              Cancel Reservation
            </button>
          )}
      </div>
    </article>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Rocket;
