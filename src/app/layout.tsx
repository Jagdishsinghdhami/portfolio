import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactFormProvider, MenuProvider } from "@/components/Provider";
import ContactForm from "@/components/ContactForm";
import SideBar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio : Jagdish Dhami",
  description: "Portfolio : Jagdish singh dhami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MenuProvider>
          <ContactFormProvider>
            <ContactForm />
            <Toaster />
            <div className="flex">
              <SideBar />
              <main className="flex-1 pl-0 lg:pl-[300px]">
                <Navbar />
                {children}
              </main>
            </div>
          </ContactFormProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
