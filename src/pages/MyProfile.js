import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const selectReservedRockets = (state) => {
  const { rockets: { inventory: rockets } } = state;
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return reservedRockets;
};

const MyProfile = () => {
  const rockets = useSelector(selectReservedRockets);

  const myReservedRockets = rockets.map((rocket) => {
    const { id, name } = rocket;

    return (
      <li key={id} className="myRocketItem">
        <p className="myRocketName">
          {name}
        </p>
      </li>
    );
  });

  return (
    <>
      <div className="myProfile">
        <h2 className="rckTitle">My Rockets</h2>
        <ul className="myRockets">
          {myReservedRockets}
        </ul>
      </div>
    </>
  );
};

export default MyProfile;
