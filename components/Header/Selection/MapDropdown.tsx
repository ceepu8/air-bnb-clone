import classNames from 'classnames';
import React from 'react';
import styles from './selection.module.css';

const regions = [
  {
    image: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg',
    name: 'Tìm kiếm linh hoạt',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320',
    name: 'Châu Âu',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320',
    name: 'Thái Lan',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320',
    name: 'Hoa Kỳ',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/c193e77c-0b2b-4f76-8101-b869348d8fc4.jpg?im_w=320',
    name: 'Hàn Quốc',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320',
    name: 'Pháp',
  },
];

type RegionProps = {
  image: string;
  name: string;
};

const RegionItem = ({ image, name }: RegionProps) => {
  return (
    <div className="w-1/3 p-2">
      <div>
        <img
          src={image}
          alt=""
          className="w-full h-[120px] border-lightGrey border-[1px] border-solid rounded-lg"
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

const MapDropdown = () => {
  return (
    <div className={classNames(styles.dropdown, styles.mapDropdown, 'rounded-3xl')}>
      <h4 className="h4">Tìm kiếm theo khu vực</h4>
      <div className="flex flex-wrap">
        {regions.map((region) => (
          <RegionItem image={region.image} name={region.name} />
        ))}
      </div>
    </div>
  );
};

export default MapDropdown;
