import React from 'react';
import SelectionBox from './SelectionBox';
import SelectionBoxExtend from './SelectionBoxExtend';

const Selection = ({
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

export default Selection;
