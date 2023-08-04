import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'YOMI-Booking',
  description: 'Escape to our guest house in Asmara, Eritrea. Relax and recharge with modern amenities, including a kitchen and TV. Book your stay now!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-signin-client_id" content="951915330464-rg6q1gbd06lg3u5256qekve8k7ncjfh3.apps.googleusercontent.com" />
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
