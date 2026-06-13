import { MenuProvider } from "@/context/menuContext";
import Navbar from "@/components/navbar/Navbar";
import MobileNav from "@/components/navbar/MobileNav";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <MenuProvider>
        <Navbar />
        <MobileNav />
        {children}
      </MenuProvider>
      <Footer />
    </>
  );
}
