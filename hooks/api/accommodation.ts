import axiosClient from '@/api-client/axiosClient';
import { Accommodation } from '@/interfaces';
import { useEffect, useState } from 'react';

type APIResponse = {
  content: Accommodation[];
  dateTime: string | Date;
  statusCode: number;
};

export const useFetchAccommodation = (
  locationId?: string | string[] | undefined,
): [Accommodation[], boolean] => {
  const [data, setData] = useState<Accommodation[]>([]);
  const [isLoading, setLoading] = useState(true);

  const apiURL = locationId
    ? `/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`
    : '/phong-thue';

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { content } = await axiosClient.get<unknown, APIResponse>(apiURL);
      if (Array.isArray(content)) {
        setData(content);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, [locationId]);

  return [data, isLoading];
};
