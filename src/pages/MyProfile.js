import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { leaveMission } from '../redux/missions/missions';
import { cancelReservedRocket } from '../redux/rockets/rockets';
import wikiLogo from '../assets/imgs/logo/wikipedia_logo.png';
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
  const dispatch = useDispatch();

  const handleCancelReservedRocket = (id) => {
    dispatch(cancelReservedRocket(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  const myReservedRockets = myRockets.map((rocket) => {
    const { id, name, wikipedia } = rocket;

    return (
      <li key={id} className="myListItem">
        <p className="myItemName">
          {name}
        </p>
        <a
          href={wikipedia}
          target="_blank"
          rel="noreferrer noopener"
          className="moreInfo"
        >
          read more
          <span className="wikiLogo">
            <img src={wikiLogo} alt="wikipedia logo" />
          </span>
        </a>
        <button
          type="button"
          className="btn btn-cReserve"
          onClick={() => handleCancelReservedRocket(id)}
        >
          Cancel Reservation
        </button>
      </li>
    );
  });

  const myJoinedMissions = myMissions.map((mission) => {
    const { id, name, wikipedia } = mission;

    return (
      <li key={id} className="myListItem">
        <p className="myItemName">
          {name}
        </p>
        <a
          href={wikipedia}
          target="_blank"
          rel="noreferrer noopener"
          className="moreInfo"
        >
          read more
          <span className="wikiLogo">
            <img src={wikiLogo} alt="wikipedia logo" />
          </span>
        </a>
        <button
          type="button"
          className="btn btn-mLeave"
          onClick={() => handleLeaveMission(id)}
        >
          Leave Mission
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="myProfile">
        <section className="mySection">
          <h2 className="sectionTitle">My Rockets</h2>
          { myReservedRockets.length
            ? (
              <ul className="myList">
                {myReservedRockets}
              </ul>
            )
            : (
              <p className="noItems">
                There are no Rockets that have been
                <span className="badge rktBadge resBadge">Reserved</span>
                by you.
              </p>
            )}
        </section>
        <section className="mySection">
          <h2 className="sectionTitle">My Missions</h2>
          { myJoinedMissions.length
            ? (
              <ul className="myList">
                {myJoinedMissions}
              </ul>
            )
            : (
              <p className="noItems">
                You haven&apos;t yet become an
                <span className="badge misBadge misActive">Active Member</span>
                of any Missions.
              </p>
            )}
        </section>
      </div>
    </>
  );
};

export default MyProfile;
