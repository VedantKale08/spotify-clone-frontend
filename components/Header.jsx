"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import { useEffect, useState } from "react";
import LoginPopup from "./LoginPopup";
import { getCookie } from "cookies-next";
import { CgProfile } from "react-icons/cg";
import { userStore } from "@/stores/getUserDetails";
import { authStore } from "@/stores/authStore";
import { register } from "@/helpers/functions";
import { useSession } from "next-auth/react";

function Header({ children, className, token, isLoggedInUser }) {
  const router = useRouter();
  const setToken = userStore((state) => state.setToken);
  const setLoginPopup = authStore((state) => state.setLoginPopup);
  const setRegisterPopup = authStore((state) => state.setRegisterPopup);

  const session = useSession();
  useEffect(() => {
    if (!isLoggedInUser) {
      register(session?.data?.user);
    }
    setToken(token);
  }, [token, isLoggedInUser, session]);

  const handleLogout = () => {};

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition"
            onClick={() => router.back()}
          >
            <RxCaretLeft size={30} className="text-white" />
          </button>
          <button
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition"
            onClick={() => router.forward()}
          >
            <RxCaretRight size={30} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {!token ? (
            <>
              <div>
                <Button
                  onClick={() => {
                    setRegisterPopup(true);
                  }}
                  className="bg-transparent text-neutral-300 font-medium"
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => {
                    setLoginPopup(true);
                  }}
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Button className="bg-neutral-800 text-white p-2">
                  <CgProfile size={25} />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;
