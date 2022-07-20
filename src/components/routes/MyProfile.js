import React from 'react';
import MissionDisplay from './MissionDisplay';

const MyProfile = () => (
  <main id="my-profile">
    <MissionDisplay />
    {/* you can replace the second component below with => My Rocket */}
    <MissionDisplay />
  </main>
);

export default MyProfile;
