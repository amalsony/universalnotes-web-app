"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginSuccess() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 1400);
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 to-slate-950 justify-center items-center min-h-screen text-white/90">
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
            <h2 className="text-2xl font-semibold mx-2">Logged In</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
