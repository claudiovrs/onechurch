'use client';
import './globals.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './lib/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <main className="min-h-screen mt-[74px] md:mt-[93px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}