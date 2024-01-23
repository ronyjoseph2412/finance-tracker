import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/Provider";
import TransitionsModal from "@/Components/Modal/CustomModal";
import Navbar from "@/Components/Navbar/Navbar";

const inter = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Expense Tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <>
            <Navbar />
            <TransitionsModal />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
