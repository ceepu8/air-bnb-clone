import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const useMouseLeave = () => {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent) {
      const isMouseDown = !ref.current?.contains(target as Node);
      setValue(isMouseDown);
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return [ref, value];
};

export default useMouseLeave;
