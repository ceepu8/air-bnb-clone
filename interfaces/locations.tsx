export interface Location {
  country: string;
  deleteAt: boolean;
  image: string;
  name: string;
  province: string;
  valueate: number;
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
