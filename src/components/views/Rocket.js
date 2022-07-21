import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import styles from './Rocket.module.css';
import { reserveRocket, cancelReservation } from '../../store/rockets';

const Rocket = ({ rocket }) => {
  const {
    id, name, description, image, reserved,
  } = rocket;
  const dispatch = useDispatch();
  return (
    <li>
      <div className={styles.rocket}>
        <img src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>
            {reserved ? (
              <>
                <Badge bg="info">Reserved</Badge>
                {' '}
              </>
            ) : undefined}
            {description}
          </p>
          {reserved ? <Button variant="outline-secondary" onClick={() => dispatch(cancelReservation({ id }))}>Cancel Reservation</Button> : <Button variant="primary" onClick={() => dispatch(reserveRocket({ id }))}>Reserve Rocket</Button>}
        </div>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

Rocket.defaultProps = {
  rocket: null,
};

export default Rocket;
