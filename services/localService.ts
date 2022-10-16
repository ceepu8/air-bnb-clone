import { User } from "@/interfaces/index";

const SET_USER_INFOR = "SET_USER_INFOR";

export const userLocalService = {
  setUserInfor: (data: User) => {
    let json = JSON.stringify(data);
    localStorage.setItem(SET_USER_INFOR, json);
  },

  getUserInfor: () => {
    let userInforJson = localStorage.getItem(SET_USER_INFOR);
    if (userInforJson) {
      let userInfor = JSON.parse(userInforJson);
      return userInfor;
    }
  },

  removeUserInfor: () => {
    localStorage.removeItem(SET_USER_INFOR);
  },
};
