import {
  Poppins,
  Merriweather
} from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const teko = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})