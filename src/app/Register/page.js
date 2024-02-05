"use client";
import { useState } from "react";
import React from "react";
import "./register.css";
import { useLogin } from "@/hooks/authprovider";
import { useRouter } from "next/navigation";
export default function Login() {
  const { loginWithGoogle, loginWithEmail, registerWithEmail } = useLogin();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const router = useRouter();
  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        <div className="heading">Register</div>
        <input
          type="text"
          className="input"
          placeholder="E-mail"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          value={password}
          placeholder="Password"
          onChange={(e) => SetPassword(e.target.value)}
        />
        <div
          className="login"
          onClick={() => registerWithEmail(email, password)}
        >
          Register
        </div>
        <div className="google" onClick={loginWithGoogle}>
          <div className="logo"></div>
          <div className="text">Log In With Google</div>
        </div>
        <div className="last">
          <div className="last-text">Want to Sign In?</div>
          <div onClick={()=>router.push('./Login')} className="register">
            Click Here!
          </div>
        </div>
      </div>
    </div>
  );
}
