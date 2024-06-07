import { User } from "@models/User";
import baseUrlApi from "@utils/baseUrlApi";
import axios, { AxiosResponse } from "axios";

export const UserService = {
  RegisterUser: async (user: User) => {
    try {
      const API_URL = `${baseUrlApi.baseUrlApi}/User`;
      const token = localStorage.getItem("token");
      const httpHeaders = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response: AxiosResponse = await axios.post(API_URL, user, {
        headers: httpHeaders,
      });

      if (response) {
        return response.data;
      }
    } catch (error) {
      throw new Error("Não foi possível criar uma conta");
    }
  },
  Login: async (email: string, password: string) => {
    try {
      const API_URL = `${baseUrlApi.baseUrlApi}/User/SignIn`;
      const httpHeaders = {
        "Content-Type": "application/json",
      };
      const response: AxiosResponse = await axios.post(
        API_URL,
        {
          phone: email,
          password: password,
        },
        {
          headers: httpHeaders,
        }
      );

      if (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data;
      }
    } catch (error) {
      throw new Error("Telefone ou senha incorretos");
    }
  },
};
