import React from 'react';
import MyMission from '../views/MyMission';

const MyProfile = () => (
  <main id="my-profile">
    <MyMission />
    {/* you can replace the second component below with => My Rocket */}
    <MyMission />
  </main>
);

export default MyProfile;
