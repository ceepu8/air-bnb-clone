import classnames from 'classnames';
import useFlag from 'hooks/useFlag';
import useMouseLeave from 'hooks/useMouseLeave';
import React, { useState } from 'react';
import MapDropdown from './MapDropdown';
import styles from './styles.module.css';

type Props = {};

const MapSelection = () => {
  const [ref, isMouseOut] = useMouseLeave();

  return (
    <>
      <div
        ref={ref}
        className={classnames('grow-[2]', styles.selectionInput, {
          'bg-white': !isMouseOut,
        })}
      >
        <label htmlFor="destination" className={classnames(styles.labelInput)}>
          Địa điểm
        </label>
        <br />
        <input
          id="destination"
          placeholder="Tìm kiếm điểm đến"
          className={classnames(styles.customInput, {
            // active: select === 'destination',
          })}
        />
      </div>
      {!isMouseOut && <MapDropdown />}
    </>
  );
};

export default MapSelection;