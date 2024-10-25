"use client";

import { montserrat } from "@/libs/fonts";
import "../styles/globals.css";
import { ChakraUIProvider } from "@/providers/ChakraUIProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { CityProvider } from "@/context/city";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GOOGLE_MAPS_API_KEY = "AIzaSyAZxkwwVDD4iu1Buo06IR92AzY372ql3ZQ";

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
          <CityProvider>
            <ChakraUIProvider>
              <ReactQueryProvider>
                <Sidebar />
                {children}
              </ReactQueryProvider>
            </ChakraUIProvider>
          </CityProvider>
        </APIProvider>
      </body>
    </html>
  );
}
