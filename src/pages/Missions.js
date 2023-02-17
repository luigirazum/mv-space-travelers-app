import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions, checkMissionsStatus,
} from '../redux/missions/missions';
import Mission from '../components/Mission/Mission';
import './Missions.css';

const selectMissionsByIds = (state) => state
  .missions.avaliable.map((mission) => mission.id);

const selectStatusMessage = (state) => state.missions.message || 'No message';

const Missions = () => {
  const statusMessage = useSelector(selectStatusMessage, shallowEqual);
  const missionsIds = useSelector(selectMissionsByIds, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missionsIds.length) {
      dispatch(fetchMissions());
    }
  }, [missionsIds, dispatch]);

  const renderedMissions = missionsIds.map((missionId) => (
    <Mission key={missionId} id={missionId} />
  ));

  if (!missionsIds.length) {
    return (
      <>
        <h2>⛔ No Missions available right now.</h2>
        <p>Under construction 👷‍♂️</p>
        <button
          type="button"
          onClick={() => dispatch(checkMissionsStatus())}
        >
          Check Status
        </button>
        <p>
          {statusMessage}
        </p>
      </>
    );
  }

  return (
    <>
      <section className="missionsTable">
        <header className="missionsHeader">
          <div className="headerName">
            <h3>Mission Name</h3>
          </div>
          <div className="headerDescription">
            <h3>Description</h3>
          </div>
          <div className="headerStatus">
            <h3>Status</h3>
          </div>
        </header>
        {renderedMissions}
      </section>
    </>
  );
};

export default Missions;
