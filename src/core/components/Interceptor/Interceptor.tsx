// src/components/AxiosInterceptor.js
import axios from "axios";
import { useEffect, useRef } from "react";
import {jwtDecode} from "jwt-decode";

const axiosInstance = axios.create();

const AxiosInterceptor = () => {
  const timeoutRef = useRef<any>(null);

  const scheduleTokenRefresh = (accessToken:any) => {
    try {
      const decoded:any = jwtDecode(accessToken);
      const currentTime = Math.floor(Date.now() / 1000);
      const timeUntilExpiry = decoded.exp - currentTime;
      const timeBeforeRefresh = timeUntilExpiry - 300; // 5 mins before expiry

      if (timeBeforeRefresh > 0) {
        timeoutRef.current = setTimeout(refreshToken, timeBeforeRefresh * 1000);
      } else {
        refreshToken(); // Already near expiry
      }
    } catch (e) {
      console.error("Invalid token:", e);
    }
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return;

    try {
      const response = await axiosInstance.get(
        "http://localhost:3000/login/refresh-token",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      const newAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      scheduleTokenRefresh(newAccessToken); // Reschedule
    } catch (error) {
      console.error("Auto token refresh failed:", error);
      // Optionally handle logout or notify user
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      scheduleTokenRefresh(token);
    }

    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );


    return () => {
      clearTimeout(timeoutRef.current);
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  return null;
};

export default AxiosInterceptor;
