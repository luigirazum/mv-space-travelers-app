import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, reserveMission, checkMissionsStatus } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.avaliable.length) {
      dispatch(fetchMissions());
    }
  }, [missions.avaliable, dispatch]);

  const missionsList = () => {
    const rows = missions
      .avaliable.map((mission) => {
        const { id, name, description } = mission;

        return (
          <tr key={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td>
              <span>Not a member</span>
              <span>Active member</span>
            </td>
            <td>
              <button
                type="button"
                onClick={() => dispatch(reserveMission(mission.id))}
              >
                Join Mission
              </button>
              <button type="button">Leave Mission</button>
            </td>
          </tr>
        );
      });

    return (
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          {rows}
        </tbody>
      </table>
    );
  };

  if (!missions.avaliable.length) {
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
  }

  return (
    <>
      <div>
        {missionsList()}
      </div>
    </>
  );
};

export default Missions;
