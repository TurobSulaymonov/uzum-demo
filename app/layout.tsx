import React, {FC} from 'react'
import "./globals.css";
import type { Metadata } from "next";
import {Montserrat} from 'next/font/google'
import { ChildProps } from "@/types";
import Navbar from '@/components/shared/Navbar';
import { Toaster } from '@/components/ui/toaster';

const montserrot =  Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})
 
export const metadata: Metadata = {
  title: "Seleor ecommerse",
  description: "Seleor e-commerse website built with Next,js",
  icons: { icon: "/favicon.png" }
};

const RootLayout: FC<ChildProps> = ({children}): React.JSX.Element => {
   return (
    <html lang="en">
      <body
        className={`${montserrot.className}antialiased`}
      >
        <Navbar/>
       <main className='container max-w-6xl mt-24'>{children}</main>
        <Toaster/>
      </body>
    </html>
  );

}

export default RootLayout;