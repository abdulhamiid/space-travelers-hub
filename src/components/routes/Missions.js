import React, { useState } from 'react';

const Missions = () => {
  const state = useSelector((state) => state.allMission);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <main id="missions">
      <tabel>
        <thead>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {
            array.map(item => (
              <tr>
                <td>{item.mission_name}</td>
                <td>{item.description}</td>
                <td>
                  <button>NOT A MEMBER</button>
                  <button>Join Mission</button>
                </td>
              </tr>
            ))
          }
        </tbody>
        
      </tabel>
    </main>
  );
};

export default Missions;
