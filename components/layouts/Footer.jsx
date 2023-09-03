import Link from 'next/link'

import classNames from 'classnames'

import Typography from '@components/core/Typography'

import Container from '@components/layouts/Container'
import Grid from '@components/layouts/Grid'

const links = [
  {
    id: 1,
    label: 'in',
    path: '/linkedin'
  },
  {
    id: 2,
    label: 'fb',
    path: '/fb'
  },
  {
    id: 3,
    label: 'ig',
    path: '/ig'
  }
]

function NavList() {
  return (
    <ul
      className={classNames(
        'flex',
        'items-center',
        'justify-center',
        'md:justify-end',
        'gap-4',
      )}
    >
      {
        links.map(({
          id,
          label,
          path
        }) => (
          <Link
            key={id}
            href={path}
            className={classNames(
              'flex',
              'items-center',
              'justify-center',
              'w-8',
              'h-8',
              'text-sm',
              'uppercase',
              'font-medium',
              'text-gray-400',
              'bg-gray-200',
              'rounded-md',
              'border-0',
              'transition-all',
              'duration-300',
              'hover:text-blue-500',
              'hover:bg-blue-50',
            )}
          >
            {label}
          </Link>
        ))
      }
    </ul>
  )
}

function Footer() {
  return (
    <footer
      className={classNames(
        'flex',
        'items-center',
        'w-full',
        'md:h-16',
        'py-8',
        'md:py-0',
        'bg-white',
        'border-t-2',
        'border-gray-200',
      )}
    >
      <Container>
        <Grid
          className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'
        >
          <Typography
            variant='paragraph'
            color='gray'
            className='text-center md:text-start'
          >
            Copyright © {new Date().getFullYear()}, All Rights Reserved.
          </Typography>

          <NavList />
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
