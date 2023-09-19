"use client"
import React, { useEffect, useState } from "react";
import PopupContainer from "./PopupContainer";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useForm } from "react-hook-form";
import LoginPopup from "./LoginPopup";
import axios from "axios";
import { ApiUrl, registerApi } from "@/constants/apiEndpoints";
import { setCookie } from "cookies-next";
import { input } from "@/css/Css";
import { twMerge } from "tailwind-merge";
import { authStore } from "@/stores/authStore";
import GoogleAuth from "./Auth/GoogleAuth";

const RegisterPopup = ({ setPopup }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [type, setType] = useState(true);
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const setLoginPopup = authStore((state) => state.setLoginPopup);
  const setRegisterPopup = authStore((state) => state.setRegisterPopup);

  const togglePassword = () => {
    let input = document.getElementById("password");
    setType(!type);
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  useEffect(()=>{
    setValue('gender',gender);
  },[gender])

  const submit = async (data) => {
    if(!gender) {
      setGenderError("Gender is required")
    }else{
      try {
        const response = await axios.post(ApiUrl + registerApi, data);
        if (response?.data?.status) {
          setCookie("token", response.data.data.token);
          setPopup(false);
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <PopupContainer
      title="Welcome"
      description="Sign up for free listening"
      setPopup={setPopup}
    >
      <div className="flex flex-col items-center text-sm md:text-sm">
        <GoogleAuth/>
        <form
          className="mt-10 md:w-[80%] w-[90%] grid gap-6"
          onSubmit={handleSubmit(submit)}
        >
          <div className="grid gap-2">
            <label htmlFor="email">What&apos;s your email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email or Username"
              className={input}
              {...register("email", { required: true })}
            />
            <span
              className={`text-red-500 text-sm ${
                errors?.email?.required && "hidden"
              }`}
            ></span>
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Create a Password</label>
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
                } absolute right-5 top-4 cursor-pointer text-neutral-500 hover:text-neutral-100 transition`}
              />
              <AiFillEye
                size={23}
                onClick={() => togglePassword()}
                className={`${
                  type && "hidden"
                } absolute right-5 top-4 cursor-pointer text-neutral-500 hover:text-neutral-100 transition`}
              />
            </span>
          </div>
          <div className="grid gap-2">
            <label htmlFor="username">What should we call you?</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className={input}
              {...register("username", { required: true })}
            />
          </div>
          <div>What’s your gender?</div>
          <div className="flex w-full">
            <div
              className={`w-full border-[1px] p-3 text-sm  border-[#C0C0C0] rounded-l-md cursor-pointer text-center ${
                gender === "male"
                  ? "bg-neutral-900 text-white"
                  : "text-[#808080]"
              }`}
              onClick={() => {
                setGender("male");
                setGenderError("");
              }}
            >
              Male
            </div>
            <div
              className={`w-full border-[1px] p-3 text-sm  border-[#C0C0C0] cursor-pointer text-center ${
                gender === "female"
                  ? "bg-neutral-900 text-white"
                  : "text-[#808080]"
              }`}
              onClick={() => {
                setGender("female");
                setGenderError("");
              }}
            >
              Female
            </div>
            <div
              className={`w-full border-[1px] p-3 text-sm  border-[#C0C0C0] rounded-r-md cursor-pointer text-center ${
                gender === "other"
                  ? "bg-neutral-900 text-white"
                  : "text-[#808080]"
              }`}
              onClick={() => {
                setGender("other");
                setGenderError("");
              }}
            >
              Other
            </div>
          </div>
          <div className="flex gap-2 items-start text-sm">
            <input type="checkbox" id="message" className="mt-1" />
            <label htmlFor="message">
              I would prefer not to receive marketing messages from Spotify
            </label>
          </div>
          <div className="flex gap-2 items-start text-sm">
            <input type="checkbox" id="reg" className="mt-1" />
            <label htmlFor="reg">
              Share my registration data with Spotify’s content providers for
              marketing purpose
            </label>
          </div>
          <button
            className="bg-[#1ed760] text-black font-semibold rounded-full py-3 mt-3 hover:scale-105 transition"
            type="submit"
          >
            Sign Up
          </button>
          <div
            onClick={() => {
              setLoginPopup(true);
              setRegisterPopup(false);
            }}
            className="text-center underline hover:opacity-80 cursor-pointer"
          >
            Already a Member? Log in Now!
          </div>
        </form>
      </div>
    </PopupContainer>
  );
};

export default RegisterPopup;
