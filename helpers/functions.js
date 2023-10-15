import { ApiUrl, registerApi } from "@/constants/apiEndpoints";
import axios from "axios";
import { setCookie } from "cookies-next";

export const register = async (data) => {
      try {
        const response = await axios.post(
          ApiUrl + registerApi + "?byGoogle=true",
          data
        );
        if (response?.data?.status) {
          setCookie("token", response.data.data.token);
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
};