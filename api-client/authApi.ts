import { UserLogin } from "@/interfaces/index";
import axiosClient from "./axiosClient";

const authApi = {
  signin(data: UserLogin) {
    return axiosClient.post<unknown, any>("/auth/signin");
  },
  logout() {
    return axiosClient.post<unknown, any>("/auth/logout");
  },
};

export default authApi;
