import classnames from 'classnames';
import useFlag from 'hooks/useFlag';
import useMouseLeave from 'hooks/useMouseLeave';
import React, { useState } from 'react';
import MapDropdown from './MapDropdown';
import styles from './styles.module.css';

type Props = {};

const MapSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div
        className={classnames(styles.selectionInput, {
          'bg-white': !isMouseIn,
        })}
      >
        <label htmlFor="destination" className={classnames(styles.labelInput)}>
          Địa điểm
        </label>
        <br />
        <input
          id="destination"
          placeholder="Tìm kiếm điểm đến"
          className={classnames(styles.customInput)}
        />
      </div>
      <MapDropdown isOpen={!isMouseIn} />
    </div>
  );
};

export default MapSelection;
