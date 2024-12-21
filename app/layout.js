"use client"; 

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import SlidePage from "./Components/slidepage/slidepage";
import Panel from "./Components/panel/panel";
import Header from "./Components/header/Header";
import DownloadButton from "./Components/DonwloadButton/download";


export default function RootLayout({ children }) {

   const [showContent , setShowContent] = useState(false);
  
    useEffect(() => {
      const time = setTimeout(() => {
        setShowContent(true)
      },500);
      return () => clearTimeout(time);
    },[]);
    

  return (
    <html lang="en">
      <body
      className="h-screen flex items-center justify-center bg-itembgcolor"
      >
        <SlidePage></SlidePage>
        {
         showContent && (
              <div className="w-[98%] h-[98%] flex gap-2 flex-col px-6 bg-black rounded-3xl">
                  <Header></Header>
                  <div className="flex h-full w-full gap-20">
                  <Panel></Panel>
                <main className="w-full">
                  {children}
               </main>
                  </div>

                  <DownloadButton></DownloadButton>
              </div>
             
        )
        }

        
      </body>
    </html>
  );
}
