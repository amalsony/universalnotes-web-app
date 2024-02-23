"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

// Axios
import axios from "axios";

// Components
import ErrorPageComponent from "@/components/general/ErrorPageComponent";

export default function AccessCodes() {
  const { accessCodes } = useAuth();
  const { accessCodesError } = useAuth();

  return (
    <div>
      {accessCodesError ? (
        <ErrorPageComponent message={accessCodesError} />
      ) : accessCodes ? (
        <div className="flex flex-col mt-8 mb-4">
          <h3 className="text-2xl font-bold text-white/80 mb-4">
            Your Access Codes
          </h3>
          {accessCodes.map((code: any) => (
            <div
              key={code._id}
              className="flex items-center text-white/90 justify-between p-4 border-b border-white/10"
            >
              <h4 className={code.isUsed ? "line-through" : ""}>
                {code.accessCode}
              </h4>
              <button
                onClick={() => {
                  if (!code.isUsed) {
                    navigator.clipboard.writeText(code.accessCode);
                  }
                }}
                className="text-white/80 hover:text-white/90 transition-all duration-300"
              >
                {code.isUsed ? "" : "Copy"}
              </button>
            </div>
          ))}
          <div className="flex items-center text-white/80 justify-center mt-10">
            <p className="text-center text-white/80 max-w-sm">
              Share access to UniversalNotes by sending someone one of these
              codes.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
