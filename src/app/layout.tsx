
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Menu from "./Menu";
import Providers from "./Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SZLG Alumni",
  description: "Egy oldal a Kőbányai Szent László Gimnázium alumni közösségének építésére.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-800 overflow-y-clip text-black`} >
        <Providers>
          <Menu />
          <div className="-mt-3 z-[-1]">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
