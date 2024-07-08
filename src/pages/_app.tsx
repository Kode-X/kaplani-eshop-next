// pages/_app.js or pages/_app.tsx
import MainHeader from "@/components/MainHeader";
import "../styles/globals.css"; // Adjust path as necessary
import { AppProps } from "next/app";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
