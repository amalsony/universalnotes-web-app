"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Axios
import axios from "axios";

// Components
import ErrorPageComponent from "../general/ErrorPageComponent";
import Image from "next/image";

// Context
import { useAuth } from "@/context/AuthContext";
import AccessCodes from "./AccessCodes";

export default function Profile() {
  const { userInfo, setUserInfo } = useAuth();
  const { error, setError } = useAuth();

  const router = useRouter();

  function handleLogout() {
    axios
      .post("/api/auth/logout", {
        withCredentials: true,
      })
      .then(() => {
        setUserInfo(null);
        router.push("/");
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  return (
    <div className="flex justify-center items-center w-full max-w-xl text-white/90 px-8">
      {error ? (
        <ErrorPageComponent message={error} />
      ) : userInfo ? (
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4">
            {userInfo?.name ? `Hi ${userInfo.name.split(" ")[0]},` : "Profile"}
          </h1>
          <div className="flex w-full border bg-white/[.08] border-white/[.18] p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-center">
              <Image
                src={userInfo?.profilePic}
                width={400}
                height={400}
                alt="avatar"
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <h4 className="font-bold text-xl">{userInfo?.name}</h4>
              <h4 className="font-bold text-white/80 mt-1">
                {userInfo?.email}
              </h4>
            </div>
          </div>
          <AccessCodes />
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLogout}
              className="py-2 px-8 border border-white/80 text-white/90 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Logout
            </button>
          </div>
          <div>
            <p className="text-center font-bold mt-8 text-white/90">
              Need help with your account? Please email us at
              universalnotesorg@gmail.com and we&apos;ll assist you promptly.
            </p>
            <p className="text-center mt-8 text-white/90">
              We&apos;re working to making this page more functional soon.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
