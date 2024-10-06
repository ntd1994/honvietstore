'use client'

import { Metadata } from "next"
import React, { useEffect } from "react";
import "styles/globals.css"
import Script from "next/script";



const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"



export default function RootLayout(props: { children: React.ReactNode }) {
  useEffect(() => {
  
    window.googleTranslateElementInit = () => {
     new window.google.translate.TranslateElement({ pageLanguage: 'vi' }, 'google_translate_element');
    };
  
   }, []);
  
  return (
    <html lang="en" data-mode="light">
      <head>
    
    {/* Google Translate */}
    <Script
     src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    ></Script>

    {/* Google Translate CSS */}
   

   </head>
      <body className="bg-[#F3F4F6]">     
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}

{/* <main className="relative overflow-hidden">{props.children}</main> */}