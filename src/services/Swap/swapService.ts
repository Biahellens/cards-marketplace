import baseUrlApi from "@utils/baseUrlApi";
import axios, { AxiosResponse } from "axios";

export const SwapService = {
  Get: async (rpp = 10, page = 1) => {
    try {
      const API_URL = `${baseUrlApi.baseUrlApi}/trades`;
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
      throw new Error("Não foi possível obter as trocas ativas");
    }
  },
};
