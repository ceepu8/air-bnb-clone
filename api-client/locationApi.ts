import { LocationBackendCResult } from "../interfaces/locations";
import axiosClient from "./axiosClient";

const locationApi = {
  getLocation(limit: number) {
    return axiosClient.get<unknown, LocationBackendCResult>(
      `vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=${limit}`
    );
  },
};

export default locationApi;
