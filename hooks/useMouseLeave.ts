import React, { useEffect, useRef, useState } from 'react';

function useMouseLeave<T extends HTMLElement>() {
  const [value, setValue] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent) {
      const isMouseDown = !ref.current?.contains(target as Node);
      setValue(isMouseDown);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return { ref, value };
}

export default useMouseLeave;
