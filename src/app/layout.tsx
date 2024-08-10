import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./Menu";
import Providers from "./Providers";
import React from "react";
import MenuNSI from "./MenuNSI";

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
  
  // Function to generate a random integer between min and max
  const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Generate 100 circles with random properties
  const circles = Array.from({ length: 200 }, (_, i) => {
    const size = randomInt(50, 100); // Fixed circle size between 50px and 100px
    const duration = randomInt(20, 60); // Animation duration between 20s and 60s
    const delay = randomInt(0, 30); // Animation delay between 0s and 30s
    const opacity = Math.random() * 0.7 + 0.3; // Opacity between 0.3 and 1
    const startX = randomInt(-100, 100); // Start position X
    const startY = randomInt(-100, 100); // Start position Y
    const endX = randomInt(-100, 100); // End position X
    const endY = randomInt(-100, 100); // End position Y

    const style = {
      width: `${size}px`,
      height: `${size}px`,
      top: `${startY}%`,
      left: `${startX}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      opacity,
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      animation: `move-${i} ${duration}s linear infinite`,
    };

    // Adding keyframes for each circle
    const keyframes = `
      @keyframes move-${i} {
        0% { transform: translate(0, 0); }
        100% { transform: translate(${endX}vw, ${endY}vh); }
      }
    `;

    // Injecting the keyframes into a style element
    return (
      <React.Fragment key={i}>
        <style>{keyframes}</style>
        <div className="circle" style={style}></div>
      </React.Fragment>
    );
  });

  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-800 overflow-y-clip text-black`}>
        <div className="circles-container z-0 pointer-events-none" style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
          {circles}
        </div>
        <Providers>
          <MenuNSI />
          <div className="-mt-3 z-[9999]">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
