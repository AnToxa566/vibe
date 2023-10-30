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

const MetaTitle = "VIBE Barbershop в Запоріжжі: Сучасні Стрижки та Гоління";

const MetaDescription =
  "Відчуй справжній вайб разом з Vibe Barbershop в Запоріжжі. Ми пропонуємо стильні стрижки, гоління та догляд за вашою зовнішністю. Запишіться вже сьогодні! ☎️ 068 734 95 09";

export const metadata: Metadata = {
  title: MetaTitle,
  description: MetaDescription,
  keywords:
    "барбершоп, барбершоп запорожье, барбершоп вайб, парикмахерская запорожье, мужская парикмахерская запорожье, стрижка бороды, мужская стрижка, барбершоп vibe, vibe barbershop, барбершоп запоріжжя, barbershop, barbershop запорожье",
  openGraph: {
    images: [
      {
        url: "/images/og-image.png",
        width: 500,
        height: 500,
        alt: "VIBE Barbershop",
      },
    ],
    title: MetaTitle,
    description: MetaDescription,
    type: "website",
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
