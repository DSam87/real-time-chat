"use client";

import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      {children}
    </>
  );
}

export default Providers;
