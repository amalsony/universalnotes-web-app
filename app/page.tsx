"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Axios
import axios from "axios";

// React OAuth
import { GoogleLogin as GoogleLoginButton } from "@react-oauth/google";

export default function Home() {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    axios
      .get("https://api.universalnotes.org/auth/me", {
        withCredentials: true,
      })
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-slate-950 min-h-screen">
      {/* logo */}
      <div className="flex flex-row justify-center items-center mb-6 md:mb-10">
        <Image
          src="/logo.svg"
          alt="UniversalNotes Logo"
          width={42}
          height={42}
          draggable={false}
        />
        <h1 className="text-xl md:text-2xl text-white/90 font-bold ml-3 md:ml-4">
          UniversalNotes
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center px-4 py-10 md:pt-32 md:pb-20 w-full max-w-5xl">
          {/* title */}
          <h1 className="text-3xl md:text-5xl text-white/90 font-bold text-center mx-4">
            Community Notes for every website.
          </h1>
          {/* login */}
          <div className="flex flex-row justify-center items-center mt-8 md:mt-10">
            {userInfo ? (
              <a
                href="/api/auth/logout"
                className="bg-white/90 text-black/90 font-bold px-8 py-2 md:px-12 md:py-3 rounded-full text-lg md:text-lg shadow-lg hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 block text-center w-max"
              >
                logged in as {userInfo?.email}
              </a>
            ) : (
              <a
                href="/api/auth/google"
                className="bg-white/90 text-black/90 font-bold px-8 py-2 md:px-12 md:py-3 rounded-full text-lg md:text-lg shadow-lg hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 block text-center w-max"
              >
                Continue with Google
              </a>
            )}
          </div>
        </div>
        <div className="px-4 w-full max-w-2xl">
          <h1 className="text-md md:text-lg text-white/70 mx-4 text-center">
            UniversalNotes is an open source non-profit browser extension that
            brings Community Notes from Twitter / X to the rest of the internet.
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 md:mt-2">
            {/* github button */}
            <a
              href="https://github.com/amalsony/universalnotes"
              target="_blank"
              className="flex flex-row border border-white text-white/70 px-8 py-2 md:px-12 md:py-2 rounded-full mt-6 md:mt-10 text-md md:text-lg shadow-lg hover:scale-105 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300"
            >
              <Image
                src="/github-logo.svg"
                alt="Github Logo"
                width={24}
                height={24}
                draggable={false}
                className="mr-2"
              />
              <span>Github</span>
            </a>
            {/* discord button */}
            <a
              href="https://discord.gg/22eq948CwD"
              target="_blank"
              className="flex flex-row mt-4 md:ml-10 border border-white text-white/70 px-8 py-2 md:px-12 md:py-2 rounded-full md:mt-10 text-md md:text-lg shadow-lg hover:scale-105 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300"
            >
              <Image
                src="/discord-logo.svg"
                alt="Discord Logo"
                width={24}
                height={24}
                draggable={false}
                className="mr-2"
              />
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
