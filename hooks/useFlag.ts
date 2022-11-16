import React, { useState } from 'react';

type Props = {};

const useFlag = () => {
  const [value, setValue] = useState<boolean>(false);

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
