import { ApiResponse, LoginValues, User } from "@/interfaces/index";
import axiosClient from "./axiosClient";

const authApi = {
  signin(data: LoginValues) {
    return axiosClient.post<unknown, ApiResponse<User>>("/auth/signin", data);
  },
  logout() {
    return axiosClient.post<unknown, any>("/auth/logout");
  },
};

export default authApi;
