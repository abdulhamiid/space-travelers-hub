import React from 'react';
import MyMissions from '../views/MyMissons';
import MyRockets from '../views/MyRockets';
import styles from './MyProfile.module.css';

const MyProfile = () => (
  <main id={styles.myProfile}>
    <MyMissions />
    <MyRockets />
  </main>
);

export default MyProfile;
