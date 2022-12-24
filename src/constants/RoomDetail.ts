import { MdIron, MdOutlineLocalParking } from "react-icons/md"
import { GiWashingMachine, GiKnifeFork } from "react-icons/gi"
import { BiCameraMovie } from "react-icons/bi"
import { BsWind } from "react-icons/bs"
import { AiOutlineWifi } from "react-icons/ai"
import { FaSwimmingPool } from "react-icons/fa"
// import { Room } from '@/interfaces';
// import { IconType } from 'react-icons';

const STATIC_ROOM_DETAIL = {
  id: 1,
  tenPhong: "NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!",
  khach: 3,
  phongNgu: 1,
  giuong: 1,
  phongTam: 1,
  moTa: "Tự nhận phòng\r\nTự nhận phòng bằng khóa thông minh.\r\nDinh Long là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.",
  giaTien: 28,
  mayGiat: true,
  banLa: true,
  tivi: true,
  dieuHoa: false,
  wifi: true,
  bep: false,
  doXe: true,
  hoBoi: true,
  banUi: true,
  maViTri: 1,
  hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg",
}

const STATIC_LOCATION = {
  id: 1,
  tenViTri: "Quận 1",
  tinhThanh: "Hồ Chí Minh",
  quocGia: "Việt Nam",
  hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg",
}
const AIR_COVER = {
  logoUrl: "https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg",
  content:
    "Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng.",
}

const ROOM_SERVICES: any[] = [
  {
    keyName: "banLa",
    name: "Bàn Là",
    icon: MdIron,
  },
  {
    keyName: "banUi",
    name: "Bàn Ủi",
    icon: MdIron,
  },
  {
    keyName: "mayGiat",
    name: "Máy giặt",
    icon: GiWashingMachine,
  },
  {
    keyName: "bep",
    name: "Bếp",
    icon: GiKnifeFork,
  },
  {
    keyName: "tivi",
    name: "TV",
    icon: BiCameraMovie,
  },
  {
    keyName: "dieuHoa",
    name: "Điều hoà",
    icon: BsWind,
  },
  {
    keyName: "wifi",
    name: "Wifi",
    icon: AiOutlineWifi,
  },
  {
    keyName: "doXe",
    name: "Bãi đỗ xe",
    icon: MdOutlineLocalParking,
  },
  {
    keyName: "hoBoi",
    name: "Hồ bơi",
    icon: FaSwimmingPool,
  },
]

const PEOPLE_SELECTION = [
  {
    id: 1,
    keyName: "adult",
    name: "Người lớn",
    note: "Từ 13 tuổi trở lên",
  },
  {
    id: 2,
    keyName: "children",
    name: "Trẻ em",
    note: "Độ tuổi 2 - 12",
  },
  {
    id: 3,
    keyName: "toddler",
    name: "Em bé",
    note: "Dưới 2 tuổi",
  },
  {
    id: 4,
    keyName: "pet",
    name: "Thú cưng",
    note: "Dưới 2 tuổi",
  },
]

export { STATIC_ROOM_DETAIL, STATIC_LOCATION, AIR_COVER, PEOPLE_SELECTION, ROOM_SERVICES }
