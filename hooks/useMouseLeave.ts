import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const useMouseLeave = () => {
  const [value, setValue] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseleave', () => {
        setValue(false);
      });

      return () => {
        node.removeEventListener('mouseleave', () => {});
      };
    }
  }, [ref.current]);

  return [ref, value];
};

export default useMouseLeave;
