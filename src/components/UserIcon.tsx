"use client";
import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseClient";
import { useRouter } from "next/navigation";

const UserIcon = () => {
  const router = useRouter();
  const { currentuser } = useAuth();
  const photoURL = currentuser?.photoURL ? currentuser?.photoURL : undefined;

  useEffect(() => {
    if (!currentuser) {
      router.push("/login");
    }
  }, [currentuser]);

  const handlelogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("ログアウト失敗:", error);
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8">
          <AvatarImage src={photoURL} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{currentuser?.displayName}</DropdownMenuLabel>
        <DropdownMenuItem onClick={handlelogout}>ログアウト</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserIcon;
