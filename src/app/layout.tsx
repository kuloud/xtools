import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: "XTools - 全能格式转换工具",
  description: "支持图片、PDF、视频等多种格式转换",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
