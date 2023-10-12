import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { QueryProvider } from "~/providers/query-provider";
import { BarbershopProvider } from "~/providers/barberhop-provider";

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

export const metadata: Metadata = {
  title: "VIBE Barbershop в Запорожье: Современные Стрижки и Бритье",
  description:
    "Почувствуйте настоящий вайб с Vibe Barbershop в Запорожье. Мы предлагаем стильные стрижки, бритье и уход за внешностью. Запишитесь сегодня! ☎️ 068 734 95 09",
  keywords:
    "барбершоп, барбершоп запорожье, барбершоп вайб, парикмахерская запорожье, мужская парикмахерская запорожье, стрижка бороды, мужская стрижка, барбершоп vibe, vibe barbershop, барбершоп запоріжжя, barbershop, barbershop запорожье",
  openGraph: {
    images: "/images/og-image.png",
  },
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="uk">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <QueryProvider>
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
      </QueryProvider>
    </html>
  );
};

export default RootLayout;
