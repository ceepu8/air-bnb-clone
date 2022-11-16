import React from 'react';
import SelectionBox from './SelectionBox/SelectionBox';
import SelectionBoxExtend from './SelectionBoxExtend/SelectionBoxExtend';

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
