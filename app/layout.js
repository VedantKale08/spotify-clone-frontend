import "./globals.css";
import { Figtree } from "next/font/google";
import Main from "./main";
import AuthProvider from "@/components/Auth/AuthProvider";
import { cookies } from "next/headers";
import { authStore } from "@/stores/authStore";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Listen to Music!",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <Main>{children}</Main>
        </AuthProvider>
      </body>
    </html>
  );
}
