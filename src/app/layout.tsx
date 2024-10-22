import { montserrat } from "@/libs/fonts";
import "../styles/globals.css";
import { ChakraUIProvider } from "@/providers/ChakraUIProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { CityProvider } from "@/context/city";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <CityProvider>
          <ChakraUIProvider>
            <ReactQueryProvider>
              <Sidebar />
              {children}
            </ReactQueryProvider>
          </ChakraUIProvider>
        </CityProvider>
      </body>
    </html>
  );
}
