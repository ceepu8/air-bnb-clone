import React, { useState } from 'react';

type Props = {};

const useFlag = () => {
  const [value, setValue] = useState<Boolean>(false);

  function setOpen() {
    setValue(true);
  }

  function setClose() {
    setValue(false);
  }

  function setToggle() {
    setValue(!value);
  }

  return { value, setOpen, setClose, setToggle };
};

export default useFlag;
