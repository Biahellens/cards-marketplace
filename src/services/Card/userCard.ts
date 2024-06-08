import baseUrlApi from "@utils/baseUrlApi";
import axios, { AxiosResponse } from "axios";

export const CardService = {
  GetAll: async (rpp = 10, page = 1) => {
    try {
      const API_URL = `${baseUrlApi.baseUrlApi}/cards`;
      const token = localStorage.getItem("token");
      const httpHeaders = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response: AxiosResponse = await axios.get(
        API_URL,
        {
          headers: httpHeaders,
          params: { rpp, page }
        }
      );

      if (response) {
        return response.data;
      }
    } catch (error) {
      throw new Error("Não foi possível obter as cartas");
    }
  },
};
