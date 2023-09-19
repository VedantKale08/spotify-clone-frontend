"use client"
import React, { useState } from "react";
import PopupContainer from "./PopupContainer";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import Link from "next/link";
import { setCookie } from "cookies-next";
import axios from "axios";
import { ApiUrl, loginApi } from "@/constants/apiEndpoints";
import { useForm } from "react-hook-form";
import { input } from "@/css/Css";
import { twMerge } from "tailwind-merge";
import { authStore } from "@/stores/authStore";
import GoogleAuth from "./Auth/GoogleAuth";

const LoginPopup = ({ setPopup, title }) => {
  const [type, setType] = useState(true);
  const [error, setError] = useState("");
  const setRegisterPopup = authStore((state) => state.setRegisterPopup);
  const setLoginPopup = authStore((state) => state.setLoginPopup);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const togglePassword = () => {
    let input = document.getElementById("password");
    setType(!type);
    if (input.type == "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  const submit = async (data) => {
    try {
      const response = await axios.post(ApiUrl + loginApi, data);
      if (response?.data?.status) {
        setCookie("token", response.data.data.token);
        setPopup(false);
        window.location.reload();
      } else {
          setError(response.data.error);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <PopupContainer
      title="Welcome back"
      description="Login to Spotify"
      setPopup={setPopup}
      center={true}
    >
      <div className="flex flex-col items-center text-sm">
        {error && (
          <div className="flex gap-2 items-center justify-start p-3 bg-red-600 w-full mb-4">
            <BiErrorCircle size={23} /> <span>{error}</span>
          </div>
        )}
        <GoogleAuth/>
        <form
          className="mt-10 w-[70%] grid gap-6"
          onSubmit={handleSubmit(submit)}
        >
          <div className="grid gap-2">
            <label htmlFor="email">Email or Username</label>
            <input
              type="text"
              id="email"
              placeholder="Email or Username"
              className={input}
              {...register("username", { required: true })}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Password</label>
            <span className="w-full relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className={twMerge(input, "w-full")}
                {...register("password", { required: true })}
              />
              <AiFillEyeInvisible
                size={23}
                onClick={() => togglePassword()}
                className={`${
                  !type && "hidden"
                } absolute right-5 top-3 cursor-pointer text-neutral-500 hover:text-neutral-100 transition`}
              />
              <AiFillEye
                size={23}
                onClick={() => togglePassword()}
                className={`${
                  type && "hidden"
                } absolute right-5 top-3 cursor-pointer text-neutral-500 hover:text-neutral-100 transition`}
              />
            </span>
          </div>
          <button
            className="bg-[#1ed760] text-black font-semibold rounded-full py-3 mt-3 hover:scale-105 transition"
            type="submit"
          >
            Log In
          </button>
          <Link
            href="/forgot"
            className="text-center underline hover:opacity-80"
          >
            Forgot Password
          </Link>
          <div
            onClick={() => {
              setRegisterPopup(true);
              setLoginPopup(false);
            }}
            className="text-center underline hover:opacity-80 cursor-pointer"
          >
            Not a Member? Sign up Now!
          </div>
        </form>
      </div>
    </PopupContainer>
  );
};

export default LoginPopup;
