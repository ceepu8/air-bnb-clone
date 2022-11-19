export interface Location {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
}

export interface LocationBackendResult {
  statusCode: number;
  content: Content;
  dateTime: Date;
}

export interface Content {
  pageIndex: number;
  pageSize: number;
  totalRow: number;
  keywords: null;
  data: Location[];
}
