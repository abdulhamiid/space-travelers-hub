import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

const MyMissions = () => {
  const state = useSelector((state) => state.entities.missions);
  const missions = state.filter((mission) => mission.reserved !== false);
  return (
    <div>
      <h2>My Missions</h2>
      <ListGroup>
        {
          missions.map((mission) => (
            <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  );
};

export default MyMissions;