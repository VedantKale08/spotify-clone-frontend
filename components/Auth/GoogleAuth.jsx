"use client";
import { register } from "@/helpers/functions";
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
