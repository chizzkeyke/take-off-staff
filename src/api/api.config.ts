import axios, { AxiosResponse } from "axios"
import { UserDataRegister } from "../thunk/auth/authActionThunk";

export const instance = axios.create({
   baseURL: "http://localhost:8000/",
   headers: {
      "Content-Type": "application/json",
   },
})

const responseBody = (response: AxiosResponse) => response.data;

export const authRequests = {
   register: (url: string, data: UserDataRegister) => instance.post(url, data).then((responseBody)),
};

