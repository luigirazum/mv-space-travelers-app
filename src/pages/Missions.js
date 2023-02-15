import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/missions/missions';

const Missions = () => {
  const status = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  return (
    <>
      <h2>⛔ No Missions available right now.</h2>
      <p>Under construction 👷‍♂️</p>
      <button
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
      {status}
    </>
  );
};

export default Missions;
