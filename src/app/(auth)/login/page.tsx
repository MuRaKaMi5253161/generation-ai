"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase/firebaseClient";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {
  const { currentuser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentuser) {
      router.push("conversation");
    }
  }, [currentuser]);

  const handlelogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return <Button onClick={handlelogin}>login</Button>;
};

export default LoginPage;
