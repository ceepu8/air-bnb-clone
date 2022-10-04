export interface Location {
  hinhAnh: string;
  id: number;
  quocGia: string;
  tenViTri: string;
  tinhThanh: string;
}

export interface LocationBackendCResult {
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
