import React, { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  className: string;
};

const Image = ({ src, className }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    // sets `isInView` to true until root is visible on users browser

    const observer = new IntersectionObserver(onIntersection, { threshold: 0 });
    if (node) {
      observer.observe(node);
    } else {
      return;
    }

    function onIntersection(entries: { isIntersecting: any }[]) {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        // is in view
        observer.disconnect();
      }

      setIsInView(isIntersecting);
    }
  }, []);

  function onLoad() {
    setIsLoading((prev) => !prev);
  }
  return (
    <div ref={ref} className={`imgWrapper` + (isLoading ? ' imgWrapper--isLoading' : '')}>
      <div className="imgLoader" />
      <img className={className} src={isInView ? src : ''} alt="" onLoad={onLoad} />
    </div>
  );
};

export default Image;
