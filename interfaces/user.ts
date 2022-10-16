export interface User {
  user: {
    avatar: string;
    birthday: string;
    email: string;
    gender: boolean;
    id: number;
    name: string;
    password: string;
    phone: string;
    role: string;
  };
  token: string;
}
