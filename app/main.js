"use client"
import LoginPopup from '@/components/LoginPopup';
import RegisterPopup from '@/components/RegisterPopup';
import Sidebar from '@/components/Sidebar';
import { authStore } from '@/stores/authStore';
import React from 'react'

const Main = ({ children }) => {

  const loginPopup = authStore((state) => state.loginPopup);
  const registerPopup = authStore((state) => state.registerPopup);
  const setLoginPopup = authStore((state) => state.setLoginPopup);
  const setRegisterPopup = authStore((state) => state.setRegisterPopup);
  return (
    <div className='h-full'>
      <Sidebar>{children}</Sidebar>
      {loginPopup && <LoginPopup setPopup={setLoginPopup}/>}
      {registerPopup && <RegisterPopup setPopup={setRegisterPopup} />}
    </div>
  );
};

export default Main