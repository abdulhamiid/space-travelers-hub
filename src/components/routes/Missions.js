import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { joinMission, fetchData } from '../../store/missions';
import styles from './Missions.module.css';

const Missions = () => {
  const state = useSelector((state) => state.entities.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleMission = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <main id="missions">
      <table className={styles.missionTable}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            /* eslint-disable camelcase */
            <tr key={item.mission_id} className={styles.tableRow}>
              <td>{item.mission_name}</td>
              <td>{item.description}</td>
              <td>
                <button type="button" className={item.reserved ? styles.activeMember : styles.notActive}>{item.reserved ? 'Active member' : 'NOT A MEMBER'}</button>
              </td>
              <td>
                <button type="button" className={item.reserved ? styles.leaveMissionBtn : styles.joinMissionBtn} onClick={() => handleMission(item.mission_id)}>
                  {item.reserved ? 'Leave ' : 'Join '}
                  Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Missions;
