import React from 'react';
import classnames from 'classnames';

const image =
  'https://news.airbnb.com/wp-content/uploads/sites/4/2020/04/Airbnb_France_Medieval_Village.jpg?fit=1024%2C576&resize=1920%2C1080';

const Carousel = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className={classnames('mt-20 h-[650px]')}
    ></section>
  );
};

export default Carousel;
