import type {Metadata} from 'next';
import { Sora, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Lucky | Discord Operations',
  description: 'Premium all-in-one Discord bot dashboard.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="antialiased min-h-screen bg-canvas text-text-body">
        {children}
      </body>
    </html>
  );
}
