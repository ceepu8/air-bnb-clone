import { DropDown } from "@/components"
import RegionItem from "./RegionItem"

const regions = [
  {
    id: 1,
    tenViTri: "Quận 1",
    tinhThanh: "Hồ Chí Minh",
    quocGia: "Việt Nam",
    hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg",
  },
  {
    id: 2,
    tenViTri: "Cái Răng",
    tinhThanh: "Cần Thơ",
    quocGia: "Việt Nam",
    hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt2.jpg",
  },
  {
    id: 3,
    tenViTri: "Hòn Rùa",
    tinhThanh: "Nha Trang",
    quocGia: "Việt Nam",
    hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt3.jpg",
  },
  {
    id: 4,
    tenViTri: "Hoàn Kiếm",
    tinhThanh: "Hà Nội",
    quocGia: "Việt Nam",
    hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt4.jpg",
  },
  {
    id: 5,
    tenViTri: "Hòn Tằm",
    tinhThanh: "Phú Quốc",
    quocGia: "Việt Nam",
    hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt5.jpg",
  },
  {
    id: 6,
    tenViTri: "Hải Châu",
    tinhThanh: "Đà Nẵng",
    quocGia: "Việt Nam",
    hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt6.jpg",
  },
]

const MapDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <DropDown isOpen={isOpen} className="top-[110%] left-0 max-w-[450px]">
      <h4 className="h4">Tìm kiếm theo khu vực</h4>
      <div className="flex flex-wrap">
        {regions.map(({ hinhAnh, tinhThanh }, index) => (
          <RegionItem key={index} image={hinhAnh} name={tinhThanh} />
        ))}
      </div>
    </DropDown>
  )
}

export default MapDropdown
