"use client";
import Link from "next/link";

// Context
import { useAuth } from "@/context/AuthContext";

export default function MyNotesButton() {
  const { authLoading } = useAuth();
  const { userInfo } = useAuth();

  return (
    <>
      {authLoading ? null : userInfo ? (
        <Link
          href="/my-notes"
          className="text-white/90 py-5 px-3 hover:bg-white/10 transition-all duration-300"
        >
          My Notes
        </Link>
      ) : null}
    </>
  );
}
