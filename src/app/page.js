"use client";
import Login from "./Login/page";
import React from "react";
import {useLogin} from "@/hooks/authprovider";
import Sos from "./sos/page";
import ChatBot from "./ChatBot/ChatBot";
import Contacts from "./Contact/page";
import Navbar from "./Navbar/page";
import Weather from "./Weather/page";
import Footer from "./Footer/page";
import Faq from "./Faq/page";
import HomePage from "./Home/page";
export default function page() {
  const { user,userDetails, pending, error, loginWithGoogle, loginWithEmail, logout, registerWithEmail } = useLogin();
  return (
    <div>
      {userDetails != null?<div><Navbar/><HomePage/><Footer/></div>:<Login/>}
    </div>
  );
}
