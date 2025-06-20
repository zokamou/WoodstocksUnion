
'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";



const inter = Inter({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  display: 'swap',        
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}