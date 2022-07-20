import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const MissionDisplay = () => {
  const state = useSelector((state) => state.entities.missions);
  const missions = state.filter((mission) => mission.reserved !== false);
  console.log(state);
  return (
    <div id="missions">
      <h2>My Missions</h2>
      <ul>
        {
          missions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default MissionDisplay;
