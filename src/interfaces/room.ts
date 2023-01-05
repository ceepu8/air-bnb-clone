export interface RoomInterface {
  id?: number | undefined
  tenPhong?: string | undefined
  khach?: number | undefined
  phongNgu?: number | undefined
  giuong?: number | undefined
  phongTam?: number | undefined
  moTa?: string | undefined
  giaTien?: number | undefined
  mayGiat?: boolean | undefined
  banLa?: boolean | undefined
  tivi?: boolean | undefined
  dieuHoa?: boolean | undefined
  wifi?: boolean | undefined
  bep?: boolean | undefined
  doXe?: boolean | undefined
  hoBoi?: boolean | undefined
  banUi?: boolean | undefined
  maViTri?: number | undefined
  hinhAnh?: string | undefined
  rating?: number
}

export interface Guest {
  adult: number
  children: number
  toddler: number
}
