import classnames from 'classnames';
import useFlag from 'hooks/useFlag';
import React, { useState } from 'react';
import MapDropdown from './MapDropdown';
import styles from './styles.module.css';

type Props = {};

const MapSelection = () => {
  const { value: isDropdown, setToggle, setClose, setOpen } = useFlag();
  const [active, setActive] = useState(false);
  return (
    <div>
      <div
        className={classnames('grow-[2]', styles.selectionInput, {
          'bg-white': active,
        })}
      >
        <label htmlFor="destination" className={classnames(styles.labelInput)}>
          Địa điểm
        </label>
        <br />
        <input
          id="destination"
          placeholder="Tìm kiếm điểm đến"
          onFocus={() => {
            setOpen();
            setActive(true);
          }}
          onBlur={() => {
            setClose();
            setActive(false);
          }}
          className={classnames(styles.customInput, {
            // active: select === 'destination',
          })}
        />
      </div>
      {isDropdown && <MapDropdown />}
    </div>
  );
};

export default MapSelection;
