import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { AppSubtitle, AppTitle } from "~/common/enums/enums";

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

      <body className={montserrat.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
