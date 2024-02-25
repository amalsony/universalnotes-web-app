"use client";
import Image from "next/image";
import { useEffect } from "react";

// Navigation
import { useRouter } from "next/navigation";

// Context
import { useAuth } from "@/context/AuthContext";

// Components
import ContinueWithGoogle from "@/components/auth/ContinueWithGoogle";
import Navbar from "@/components/landing/Navbar";

export default function Login() {
  const router = useRouter();

  const { authLoading } = useAuth();
  const { userInfo } = useAuth();

  useEffect(() => {
    if (!userInfo && !authLoading) {
      router.push("/login");
    }
  }, [userInfo, authLoading]);

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 to-slate-950 min-h-screen">
      {/* Nav */}
      <Navbar />
      {authLoading ? null : userInfo ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center px-4 py-10 md:pt-32 md:pb-14 w-full max-w-5xl">
            <h1 className="text-3xl md:text-4xl text-white/80 font-medium text-center mx-4">
              <span className="text-white/90">
                Hi {userInfo?.name?.split(" ")[0]}, let&apos;s get you set up!
              </span>
            </h1>
            <div className="mt-24 max-w-xl">
              <div className="flex flex-col justify-center items-center px-2 text-white/90 text-xl">
                <h2 className="font-bold text-center">
                  Click on the puzzle piece on the top right corner and click on
                  the pin to the right of UniversalNotes
                </h2>
                <Image
                  src="/Pinning_UniversalNotes.png"
                  alt="Image showing UniversalNotes pinned to the Chrome extension bar"
                  width={485}
                  height={319}
                  className="rounded-lg h-72 w-auto my-4"
                />
                <p className="text-white/80 mt-4 text-center">
                  This gives you easy access to the extension.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-2 text-white/90 text-xl mt-12">
                <h2 className="font-bold text-center">
                  Click on the extension, and continue with Google to write or
                  vote on notes. You don't need to login to just view notes.
                </h2>
                <Image
                  src="/Logging_into_UniversalNotes.png"
                  alt="Image showing the main page of UniversalNotes with a 'Continue with Google' login button"
                  width={505}
                  height={304}
                  className="rounded-lg h-72 w-auto my-4"
                />
              </div>
              <div className="flex flex-col justify-center items-center px-2 text-white/90 text-xl mt-12">
                <h2 className="font-bold text-center">
                  Try adding a note to this page. Don't worry, only you can see
                  it.
                </h2>
                <Image
                  src="/Writing_A_UniversalNote.png"
                  alt="Image showing UniversalNotes's note input"
                  width={506}
                  height={289}
                  className="rounded-lg h-72 w-auto my-4"
                />
              </div>
              <div className="flex flex-col justify-center items-center px-2 text-white/90 text-2xl mt-12">
                <h2 className="font-bold text-center">
                  Welcome to UniversalNotes!
                </h2>
                <p className="text-white/80 text-xl mt-4 text-center">
                  You can now write, view, and vote on notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center px-4 py-10 md:pt-32 md:pb-14 w-full max-w-5xl">
            {/* title */}
            <h1 className="text-3xl md:text-4xl text-white/80 font-medium text-center mx-4">
              <span className="text-white/90">Login to UniversalNotes</span>
            </h1>
            <p className="mt-8 text-center text-white/90 text-xl max-w-8xl">
              Login or Sign up below to write, view, and vote on notes. Then
              continue on the{" "}
              <a
                target="_blank"
                href="https://chromewebstore.google.com/detail/universalnotes/ebdoepcapegdgjjbhplphgkacdodnffl"
                className="text-blue-400 hover:underline transition-all duration-300"
              >
                extension
              </a>
              .
            </p>
            <div className="mt-8">
              <ContinueWithGoogle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
