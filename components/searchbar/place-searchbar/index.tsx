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
    <div>
      <SelectionBoxExtend isToggle={extendSelectionBox} onSet={extendComponent} />
      <SelectionBox isToggle={!extendSelectionBox} onSet={extendComponent} />
    </div>
  );
};

export default PlaceSearchBar;
