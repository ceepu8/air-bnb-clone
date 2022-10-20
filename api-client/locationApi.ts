import { LocationBackendCResult } from '../interfaces/locations';
import axiosClient from './axiosClient';

const locationApi = {
  getLocation(page: number, limit: number) {
    return axiosClient.get<unknown, LocationBackendCResult>(
      `vi-tri/phan-trang-tim-kiem?pageIndex=${page}&pageSize=${limit}`,
    );
  },
};

export default locationApi;
