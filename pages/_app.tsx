import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";

const noAuthRequired = ["/", "/SignIn", "/signUp"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}

      <div className="bg-[#171717]">
        <Footer />
      </div>
      <section className="flex justify-center bg-[#171717]">
        <span className="text-white p-6 font-thin text-sm">
          &copy; 2023. All rights reserved.
        </span>
      </section>
    </AuthContextProvider>
  );
}

export default MyApp;
