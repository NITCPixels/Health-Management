"use client";
import { useState } from "react";
import React from "react";
import "./login.css";
import { useLogin } from "@/hooks/authprovider";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const { loginWithGoogle, loginWithEmail, error } = useLogin();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const router = useRouter();
  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        <div className="heading">Login</div>
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
        <div className="login" onClick={() => loginWithEmail(email, password)}>
          Login
        </div>
        {error? 
          (<div className="error-prompt">
            <p>{error}</p>
          </div>): null
        }

        <div className="google" onClick={loginWithGoogle}>
          <div className="logo"></div>
          <div className="text">Log In With Google</div>
        </div>
        <div className="last">
          <div className="last-text">Don't have an account yet?</div>
            <div onClick={()=>{router.push('./Register')}} className="register">
             Register Here
          </div>
        </div>
      </div>
    </div>
  );
}
