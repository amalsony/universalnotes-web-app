import { createContext, useState, useEffect } from "react";

// Axios
import axios from "axios";

// Context
export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [accessCodes, setAccessCodes] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [accessCodesError, setAccessCodesError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://universalnotes.org/auth/me", {
        withCredentials: true,
      })
      .then((res) => {
        setAuthLoading(false);
        setUserInfo(res.data);
      })
      .catch((err) => {
        setAuthLoading(false);
        setError(err.response.data.error);
      });
  }, []);

  useEffect(() => {
    if (userInfo) {
      axios
        .get("https://api.universalnotes.org/auth/access-codes")
        .then((res) => {
          setAccessCodes(res.data.data);
        })
        .catch((err) => {
          setAccessCodesError(err.response.data.error);
        });
    }
  }, [userInfo]);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        authLoading,
        setAuthLoading,
        error,
        setError,
        accessCodes,
        setAccessCodes,
        accessCodesError,
        setAccessCodesError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
