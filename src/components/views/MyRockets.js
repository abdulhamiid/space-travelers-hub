import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

const MyRockets = () => {
  const state = useSelector((state) => state.entities.rockets);
  const rockets = state.filter((rocket) => rocket.reserved !== false);
  return (
    <div>
      <h2>My Rockets</h2>
      <ListGroup>
        {
          rockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  );
};

export default MyRockets;
