"use client";

// Import Providers
import { GoogleOAuthProvider } from "@react-oauth/google";

// Import config
import { GOOGLE_CLIENT_ID } from "@/auth/AuthConfig";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
}
