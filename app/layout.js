import { Footer } from '@/components/Footer'
import './globals.css'

//Fonts
import { Oswald, Raleway } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-title',
  display: 'swap',
})

const raleway = Raleway({
  weight: ['400', '300'],
  subsets: ['latin'],
  variable: '--font-text',
  display: 'swap',
})

export const metadata = {
  title: 'TO-DO App',
  description: 'TO DO application, allows you to add tasks, search and/or delete them. Created with NextJs, ReactJs and TailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${raleway.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
