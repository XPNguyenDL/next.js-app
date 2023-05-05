import FooterAdmin from "@/src/components/Layout/FooterAdmin";
import HeadAdmin from "@/src/components/Layout/HeaderAdmin";
import "@/src/styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeadAdmin />
        <main>{children}</main>
        <FooterAdmin />
      </body>
    </html>
  );
}
