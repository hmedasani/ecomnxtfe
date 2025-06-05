import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/styles/globals.css";
import Providers from "@/providers";
import SiteHeader from "@/components/layout/header";
import Main from "@/components/layout/main";
import SiteFooter from "@/components/layout/footer";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION
};

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ChildProps extends LayoutProps {
  id?: string;
  className?: string;
  key?: string;
}

export default function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <SiteHeader />
          <Main>
            {children}
          </Main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
