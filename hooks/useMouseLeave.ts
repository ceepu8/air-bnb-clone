import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const useMouseLeave = () => {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event) {
      setValue(!ref.current.contains(event.target));
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return [ref, value];
};

export default useMouseLeave;
