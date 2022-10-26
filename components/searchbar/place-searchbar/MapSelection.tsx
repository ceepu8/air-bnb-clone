import CapsuleSelection from '@/components/data-entry/CapsuleSelection';
import useMouseLeave from 'hooks/useMouseLeave';
import Dropdown from '@/components/navigation/Dropdown';
import { Dispatch, SetStateAction, useState } from 'react';

const regions = [
  {
    id: 1,
    tenViTri: 'Quận 1',
    tinhThanh: 'Hồ Chí Minh',
    quocGia: 'Việt Nam',
    hinhAnh: 'https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg',
  },
  {
    id: 2,
    tenViTri: 'Cái Răng',
    tinhThanh: 'Cần Thơ',
    quocGia: 'Việt Nam',
    hinhAnh: 'https://airbnbnew.cybersoft.edu.vn/images/vt2.jpg',
  },
  {
    id: 3,
    tenViTri: 'Hòn Rùa',
    tinhThanh: 'Nha Trang',
    quocGia: 'Việt Nam',
    hinhAnh: 'https://airbnbnew.cybersoft.edu.vn/images/vt3.jpg',
  },
  {
    id: 4,
    tenViTri: 'Hoàn Kiếm',
    tinhThanh: 'Hà Nội',
    quocGia: 'Việt Nam',
    hinhAnh: 'https://airbnbnew.cybersoft.edu.vn/images/vt4.jpg',
  },
  {
    id: 5,
    tenViTri: 'Hòn Tằm',
    tinhThanh: 'Phú Quốc',
    quocGia: 'Việt Nam',
    hinhAnh: 'https://airbnbnew.cybersoft.edu.vn/images/vt5.jpg',
  },
  {
    id: 6,
    tenViTri: 'Hải Châu',
    tinhThanh: 'Đà Nẵng',
    quocGia: 'Việt Nam',
    hinhAnh: 'https://airbnbnew.cybersoft.edu.vn/images/vt6.jpg',
  },
];

type RegionProps = {
  image: string;
  name: string;
  handleSelect: Dispatch<SetStateAction<string>>;
};

const RegionItem = ({ image, name, handleSelect }: RegionProps) => {
  return (
    <div className="w-1/3 p-2">
      <div className="h-[120px]" onClick={() => handleSelect(name)}>
        <img
          src={image}
          alt=""
          className="w-full h-full border-grey-300 border-[1px] border-solid rounded-lg object-cover cursor-pointer transition-all hover:border-black-100"
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

const MapDropdown = ({
  isOpen,
  handleSelect,
}: {
  isOpen: boolean;
  handleSelect: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Dropdown isOpen={isOpen} className="max-w-[450px] top-[110%] left-0">
      <h4 className="h4">Tìm kiếm theo khu vực</h4>
      <div className="flex flex-wrap">
        {regions.map(({ hinhAnh, tinhThanh }) => (
          <RegionItem image={hinhAnh} name={tinhThanh} handleSelect={handleSelect} />
        ))}
      </div>
    </Dropdown>
  );
};

const MapSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();
  const [value, setValue] = useState('');

  return (
    <div ref={ref}>
      <CapsuleSelection isActive={isMouseIn} labelText="Địa điểm">
        <input
          className="bg-transparent"
          id="destination"
          placeholder="Tìm kiếm điểm đến"
          value={value}
        />
      </CapsuleSelection>
      <MapDropdown isOpen={isMouseIn} handleSelect={setValue} />
    </div>
  );
};

export default MapSelection;
