"use client";

import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

import { BarberProvider } from "~/providers/barber-provider";
import { AppSubtitle, AppTitle } from "~/common/enums/enums";

import "react-toastify/dist/ReactToastify.css";
import styles from "./layout.module.scss";
import "./globals.scss";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "700", "900"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: AppTitle.MAIN,
  description: AppSubtitle.MAIN,
  keywords: [
    "барбершоп",
    "барбершоп мужские стрижки",
    "барбершоп запорожье",
    "барбершоп запорожье цены",
    "барбершоп запоріжжя",
    "барбершоп вайб",
    "барбершоп центр",
    "barber",
    "barbershop",
    "barbershop запоріжжя",
    "barbershop запорожье",
    "vibe barbershop",
  ],
  openGraph: {
    images: "/images/og-image.png",
  },
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  return (
    <html lang="uk">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <BarberProvider>
        <QueryClientProvider client={queryClient}>
          <body className={montserrat.className}>
            {children}

            <ToastContainer
              className={styles.notify}
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </body>
        </QueryClientProvider>
      </BarberProvider>
    </html>
  );
};

export default RootLayout;
