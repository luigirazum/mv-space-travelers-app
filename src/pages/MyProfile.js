import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const selectReservedRockets = (state) => {
  const { rockets: { inventory: rockets } } = state;
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return reservedRockets;
};

const selectJoinedMissions = (state) => {
  const { missions: { avaliable: missions } } = state;
  const joinedMissions = missions.filter((mission) => mission.joined);

  return joinedMissions;
};

const MyProfile = () => {
  const myRockets = useSelector(selectReservedRockets);
  const myMissions = useSelector(selectJoinedMissions);

  const myReservedRockets = myRockets.map((rocket) => {
    const { id, name } = rocket;

    return (
      <li key={id} className="myListItem">
        <p className="myItemName">
          {name}
        </p>
      </li>
    );
  });

  const myJoinedMissions = myMissions.map((mission) => {
    const { id, name } = mission;

    return (
      <li key={id} className="myListItem">
        <p className="myItemName">
          {name}
        </p>
      </li>
    );
  });

  return (
    <>
      <div className="myProfile">
        <section className="mySection">
          <h2 className="sectionTitle">My Rockets</h2>
          <ul className="myList">
            {myReservedRockets}
          </ul>
        </section>
        <section className="mySection">
          <h2 className="sectionTitle">My Missions</h2>
          <ul className="myList">
            {myJoinedMissions}
          </ul>
        </section>
      </div>
    </>
  );
};

export default MyProfile;
