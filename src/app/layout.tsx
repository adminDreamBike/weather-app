import { lusitana, montserrat } from "@/libs/fonts";
import "../styles/globals.css";
import { ChakraUIProvider } from "@/providers/ChakraUIProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ChakraUIProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ChakraUIProvider>
      </body>
    </html>
  );
}
