import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const switzer = localFont({
  src: [
    {
      path: "../font/Switzer-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../font/Switzer-Thin.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../font/Switzer-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../font/Switzer-Bold.otf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-switzer",
});
export default function App({ Component, pageProps }: AppProps) {
 return (
   <main className={`${switzer.variable} font-switzer`}>
     <Component {...pageProps} />;
   </main>
 );
}
