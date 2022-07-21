import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { fetchRocketsFromAPI } from '../../store/rockets';
import styles from './RocketList.module.css';

let apiCalled = false;

const RocketList = () => {
  const rockets = useSelector((state) => state.entities.rockets);
  const dispatch = useDispatch();
  if (apiCalled === false) {
    apiCalled = true;
    dispatch(fetchRocketsFromAPI());
  }
  return (
    <ul className={styles.rocketList}>
      {rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

export default RocketList;
