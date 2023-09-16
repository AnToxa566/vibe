import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { BarberProvider } from "~/providers/barber-provider";
import { AppSubtitle, AppTitle } from "~/common/enums/enums";

import "./globals.scss";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "700", "900"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: AppTitle.MAIN,
  description: AppSubtitle.MAIN,
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="uk">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <BarberProvider>
        <body className={montserrat.className}>{children}</body>
      </BarberProvider>
    </html>
  );
};

export default RootLayout;
