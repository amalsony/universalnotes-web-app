"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function LoginSuccess() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 2200);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[#f8f8f8] min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center px-4 py-10 md:pt-32 md:pb-20 w-full max-w-5xl">
          {/* check */}
          <div className="flex flex-row justify-center items-center mb-6 md:mb-10">
            <Image
              src="/check.svg"
              alt="Check"
              width={42}
              height={42}
              draggable={false}
            />
            <h2 className="text-2xl font-semibold text-black mx-2">
              Logged In
            </h2>
          </div>
          {/* title */}
          {/* <h1 className="text-3xl md:text-2xl text-black/90 font-bold text-center mx-4">
            You've successfully logged in!
          </h1> */}
          {/* text saying click on the extension to continue */}
          {/* <div className="flex flex-col justify-center items-center mt-4 md:mt-8">
            <p className="text-black/90 text-xl text-center text-bold">
              Click on the extension to continue.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
