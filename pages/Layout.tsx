import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`w-[90%] mx-auto my-0 py-4 ${inter.className}`}>
      {children}
    </main>
  );
};

export default Layout;
