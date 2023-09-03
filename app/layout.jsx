import classNames from 'classnames'

import '@styles/globals.css'

import {
  poppins
} from '@utils/fonts'

import Navbar from '@components/layouts/Navbar'
import Footer from '@components/layouts/Footer'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

function RootLayout({ children }) {
  return (
    <html
      lang='en'
    >
      <body
        className={classNames(
          poppins.className
        )}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html >
  )
}

export default RootLayout
