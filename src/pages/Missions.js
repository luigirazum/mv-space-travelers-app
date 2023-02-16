import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, reserveMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.avaliable.length) {
      dispatch(fetchMissions());
    }
  }, [missions.avaliable, dispatch]);

  // return (
  //   <>
  //     <h2>⛔ No Missions available right now.</h2>
  //     <p>Under construction 👷‍♂️</p>
  //     <button
  //       type="button"
  //       onClick={() => dispatch(checkMissionsStatus())}
  //     >
  //       Check Status
  //     </button>
  //     <p>
  //       {missions.message}
  //     </p>
  //   </>
  // );

  return (
    <ul>
      {missions.avaliable.map((mission) => {
        const { id, name } = mission;
        return (
          <li key={id}>
            <p>{name}</p>
            <button
              type="button"
              onClick={() => dispatch(reserveMission(mission.id))}
            >
              Join Mission
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Missions;
