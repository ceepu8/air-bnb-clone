import { UserLogin } from "@/interfaces/index";
import axiosClient from "./axiosClient";

const authApi = {
  signin(data: UserLogin) {
    return axiosClient.post<unknown, any>("/auth/signin", data);
  },
  logout() {
    return axiosClient.post<unknown, any>("/auth/logout");
  },
};

export default authApi;
