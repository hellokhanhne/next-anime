import "react-lazy-load-image-component/src/effects/blur.css";
import "@/src/styles/globals.css";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "react-query";
import dynamic from "next/dynamic";
import ScrollToTop from "../components/Shared/ScrollToTop";
import { toast } from "react-hot-toast";

const Toast = dynamic(() => import("../components/Shared/Toast"), {
  ssr: false,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
    mutations: {
      onError: () => {
        toast.error("Something went wrong!");
      },
    },
  },
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <NextNProgress color="#FF4500" options={{ showSpinner: false }} />
        <Component {...pageProps} />
        <Toast />
        <ScrollToTop />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
