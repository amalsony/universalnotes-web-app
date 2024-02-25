// "use client";
import Link from "next/link";

// Context
// import { useAuth } from "@/context/AuthContext";

export default function HomeButton() {
  //   const { authLoading } = useAuth();
  //   const { userInfo } = useAuth();

  return (
    <>
      {/* {authLoading ? null : userInfo ? ( */}
      <Link
        href="/home"
        className="text-white/90 py-5 px-3 hover:bg-white/10 transition-all duration-300"
      >
        Recent Notes
      </Link>
      {/* ) : null} */}
    </>
  );
}
