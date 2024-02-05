"use client";
import firebase from "@/firebase/clientApp";
import { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "@/firebase/clientApp";
export const useLogin = () => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const userDetails=async ()=>{
    if (user !== null) {
      return (firebase.auth().currentUser);
    }
}


  const loginWithGoogle = async () => {
    try {
      const res = await signInWithRedirect(auth, googleProvider);
      if (res) {
        setUser(res.user);
      }
      console.log(res);
      setPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setPending(false);
    }
  };
  const loginWithEmail = async (email, password) => {
    try {
      // const navigate = useNavigate();
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        setUser(res.user);
      }
      console.log(res);
      setPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setPending(false);
    }
  };
  const logout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  const registerWithEmail = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        setUser(res.user);
      }
      console.log(res);
      setPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setPending(false);
    }
  };
  return {
    user,
    userDetails,
    error,
    pending,
    loginWithGoogle,
    loginWithEmail,
    logout,
    registerWithEmail,
  };
};
