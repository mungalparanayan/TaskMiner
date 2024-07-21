// "use client";

import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserProvider from '@/context/userProvider';
import CustomNavbar from '@/components/CustomNavbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          <div className="">{children}</div>
          <Footer />
        </UserProvider>

      </body>
    </html>
  )
}
