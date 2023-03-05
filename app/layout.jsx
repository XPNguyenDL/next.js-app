import { Roboto } from 'next/font/google'
import Head from "@/src/components/Layout/Header";
import "@/src/styles/globals.scss";
import Footer from '@/src/components/Layout/Footer';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head/>
        <main className="mt-[var(--header-height)] px-6 md:px-10">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
