import Script from "next/script";
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
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Google Tag Manager */}
        <Script
          id="gtag"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSLDPM4P');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <QueryProvider>
        <BarbershopProvider>
          <body className={montserrat.className}>
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-KSLDPM4P"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>

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
