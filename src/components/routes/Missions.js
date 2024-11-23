import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, fetchData } from '../../store/missions';
import styles from './Missions.module.css';

let dataFetched = false;
const Missions = () => {
  const state = useSelector((state) => state.entities.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataFetched === false) {
      dataFetched = true;
      dispatch(fetchData());
    }
  }, [dispatch]);

  const toggleStatus = (id) => {
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
              <td data-label="Mission">{item.mission_name}</td>
              <td data-label="Description">{item.description}</td>
              <td data-label="Status">
                <button type="button" className={item.reserved ? styles.activeMember : styles.notActive}>{item.reserved ? 'Active Member' : 'NOT A MEMBER'}</button>
              </td>
              <td>
                <button type="button" className={item.reserved ? styles.leaveMissionBtn : styles.joinMissionBtn} onClick={() => toggleStatus(item.mission_id)}>
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
