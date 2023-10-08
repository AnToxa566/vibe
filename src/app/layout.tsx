"use client";

import Head from "next/head";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

import { BarbershopProvider } from "~/providers/barberhop-provider";
import { AppSubtitle, AppTitle } from "~/common/enums/enums";

import "./globals.scss";
import styles from "./layout.module.scss";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "700", "900"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

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
        <meta name="description" content={AppSubtitle.MAIN} />
        <meta
          name="keywords"
          content="барбершоп, мужские стрижки, запорожье, цены, запоріжжя, вайб, центр, barber, barbershop, vibe"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{AppTitle.MAIN}</title>
      </Head>

      <QueryClientProvider client={queryClient}>
        <BarbershopProvider>
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
        </BarbershopProvider>
      </QueryClientProvider>
    </html>
  );
};

export default RootLayout;
