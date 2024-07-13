import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const mcomic = localFont({
  src: [
    {
  
      path: "../public/font/medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/font/bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-mc",
});
export default function App({ Component, pageProps }: AppProps) {
 return <main className={`${mcomic.variable} font-sans`}>
    <Component {...pageProps} />;
  </main>;
}
