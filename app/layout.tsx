import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://my-next-project-gamma.vercel.app"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description:
    "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description:
      "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://my-next-project-gamma.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-TJ9NWG3" />
    </html>
  );
}
