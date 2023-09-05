import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "700", "900"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibe Barbershop", // TODO: Move
  description:
    "Ліга досвідчених чоловічих перукарів, де приходять до майстра, а не до перукарні.", // TODO: Move
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="uk">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
