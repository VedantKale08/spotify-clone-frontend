"use client";
import { ApiUrl, loginApi, registerApi } from "@/constants/apiEndpoints";
import axios from "axios";
import { setCookie } from "cookies-next";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  const session = useSession();
  console.log(session);
  useEffect(() => {
    if (session.status === "loading") {
      console.log("loading...");
    }
    if (session.status === "authenticated") {
      register(session.data.user);
    }
    if (session.status === "unauthenticated") {
      console.log("unauthenticated...");
    }
  }, [session]);

  const register = async (data) => {
    try {
      console.log("djhdhjjdjdhjdhjdhj");
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
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          signIn("google");
        }}
        className=" py-3 px-10 rounded-full border border-neutral-400 flex gap-4 items-center justify-center w-[70%] hover:border-white transition"
      >
        <FcGoogle size={30} />
        <p className="md:text-base text-sm">Continue With Google</p>
      </button>
    </>
  );
};

export default GoogleAuth;
