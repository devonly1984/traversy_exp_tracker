import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Expense Tracker Traversy",
};

const  RootLayout=({
  children,
}: Readonly<{
  children: ReactNode;
}>) =>{
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
export default RootLayout