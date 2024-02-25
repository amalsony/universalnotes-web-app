"use client";
import { useEffect } from "react";

// Navigation
import { useRouter } from "next/navigation";

// Context
import { useAuth } from "@/context/AuthContext";

export default function HomeRedirect() {
  const router = useRouter();

  const { authLoading } = useAuth();
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo && !authLoading) {
      router.push("/home");
    }
  }, [userInfo, authLoading]);

  return null;
}
