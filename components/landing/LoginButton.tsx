"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Axios
import axios from "axios";

// Context
import { useAuth } from "@/context/AuthContext";

export default function LoginButton() {
  const { authLoading } = useAuth();
  const { userInfo } = useAuth();

  return (
    <>
      {authLoading ? null : userInfo ? (
        <div className="hidden md:flex items-center space-x-1">
          <Link href="/profile">
            <Image
              src={userInfo.profilePic}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full cursor-pointer shadow-medium hover:shadow-large hover:opacity-80 transition-all duration-300"
            />
          </Link>
        </div>
      ) : (
        <div className="hidden md:flex items-center space-x-1">
          <Link
            href="/login"
            className="py-2 px-8 hover:bg-white/10 border border-white/80 hover:border-white text-white/90 rounded-full transition-bg transition-border duration-300"
          >
            Log in / Sign up
          </Link>
        </div>
      )}
    </>
  );
}
