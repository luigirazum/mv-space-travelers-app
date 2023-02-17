import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission, toggleShowMoreMission } from '../../redux/missions/missions';

const selectMissionById = (state, missionId) => state
  .missions.avaliable.find((mission) => mission.id === missionId);

const Mission = ({ id }) => {
  const mission = useSelector((state) => selectMissionById(state, id));
  const dispatch = useDispatch();

  const { name, description } = mission;

  return (
    <article className="missionItem">
      <div className="missionName">
        <h3>{name}</h3>
      </div>
      <div className="missionDescription textShowHide">
        <p style={!mission.showMore ? { display: 'block', maxHeight: '100%' } : {}}>{description}</p>
        { mission.showMore
          ? (
            <button
              type="button"
              className="showMoreLess"
              onClick={() => dispatch(toggleShowMoreMission(id))}
            >
              show more
            </button>
          )
          : (
            <button
              type="button"
              className="showMoreLess"
              onClick={() => dispatch(toggleShowMoreMission(id))}
            >
              show less
            </button>
          )}
      </div>
      <div className="missionStatus">
        { !mission.joined
          ? <span className="badge misBadge">Not a Member</span>
          : <span className="badge misBadge misActive">Active Member</span>}
        { !mission.joined
          ? (
            <button
              type="button"
              className="btn btn-mJoin"
              onClick={() => dispatch(joinMission(id))}
            >
              Join Mission
            </button>
          )
          : (
            <button
              type="button"
              className="btn btn-mLeave"
              onClick={() => dispatch(leaveMission(id))}
            >
              Leave Mission
            </button>
          )}
      </div>
    </article>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Mission;
