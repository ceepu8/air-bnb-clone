import { MdIron, MdOutlineLocalParking } from "react-icons/md"
import { GiWashingMachine, GiKnifeFork } from "react-icons/gi"
import { BiCameraMovie } from "react-icons/bi"
import { BsWind } from "react-icons/bs"
import { AiOutlineWifi } from "react-icons/ai"
import { FaSwimmingPool } from "react-icons/fa"

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
    id: 1,
    keyName: "banLa",
    name: "Bàn Là",
    icon: MdIron,
  },
  {
    id: 2,
    keyName: "banUi",
    name: "Bàn Ủi",
    icon: MdIron,
  },
  {
    id: 3,
    keyName: "mayGiat",
    name: "Máy giặt",
    icon: GiWashingMachine,
  },
  {
    id: 4,
    keyName: "bep",
    name: "Bếp",
    icon: GiKnifeFork,
  },
  {
    id: 5,
    keyName: "tivi",
    name: "TV",
    icon: BiCameraMovie,
  },
  {
    id: 6,
    keyName: "dieuHoa",
    name: "Điều hoà",
    icon: BsWind,
  },
  {
    id: 7,
    keyName: "wifi",
    name: "Wifi",
    icon: AiOutlineWifi,
  },
  {
    id: 8,
    keyName: "doXe",
    name: "Bãi đỗ xe",
    icon: MdOutlineLocalParking,
  },
  {
    id: 9,
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

export { STATIC_LOCATION, AIR_COVER, PEOPLE_SELECTION, ROOM_SERVICES }
