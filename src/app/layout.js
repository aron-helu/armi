import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ARMI-Booking',
  description: 'Escape to our guest house in Asmara, Eritrea. Relax and recharge with modern amenities, including a kitchen and TV. Book your stay now!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
