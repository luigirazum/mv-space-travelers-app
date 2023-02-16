import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkMissionsStatus, fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.avaliable.length) {
      dispatch(fetchMissions());
    }
  }, [missions.avaliable, dispatch]);

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
        {missions.message}
      </p>
    </>
  );
};

export default Missions;
