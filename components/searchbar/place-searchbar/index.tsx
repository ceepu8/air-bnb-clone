import React from 'react';
import SelectionBox from './SelectionBox';
import SelectionBoxExtend from './SelectionBoxExtend';

const PlaceSearchBar = ({
  extendSelectionBox,
  extendComponent,
}: {
  extendSelectionBox: boolean;
  extendComponent: any;
}) => {
  return (
    <>
      <SelectionBoxExtend isToggle={extendSelectionBox} onSet={extendComponent} />
      <SelectionBox isToggle={!extendSelectionBox} onSet={extendComponent} />
    </>
  );
};

export default PlaceSearchBar;
