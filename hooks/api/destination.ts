import axiosClient from '@/api-client/axiosClient';
import { Location } from '@/interfaces';
import { useEffect, useState } from 'react';

type ResponseContent = {
  data: Location[];
  keywords: null;
  pageIndex: number;
  pageSize: number;
  totalRow: number;
};

type APIResponse = {
  content: ResponseContent;
  dateTime: string | Date;
  statusCode: 200;
};

export const useFetchLocation = (): [Location[], boolean] => {
  const [data, setData] = useState<Location[]>([]);
  const [isLoading, setLoading] = useState(true);

  const PAGE = 1;
  const LIMIT_DATA_PER_PAGE = 15;

  const apiURL = `/vi-tri/phan-trang-tim-kiem?pageIndex=${PAGE}&pageSize=${LIMIT_DATA_PER_PAGE}`;

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { content } = await axiosClient.get<unknown, APIResponse>(apiURL);
      setData(content.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, []);

  return [data, isLoading];
};
