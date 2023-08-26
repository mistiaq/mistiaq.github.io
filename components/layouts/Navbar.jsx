import Link from 'next/link'

import classNames from 'classnames'

import Typography from '@components/core/Typography'
import Button from '@components/core/Button'

import Container from '@components/layouts/Container'
import Flex from '@components/layouts/Flex'
import Grid from './Grid'

const links = [
  {
    id: 1,
    label: 'cv',
    path: '/cv'
  },
  {
    id: 2,
    label: 'publications',
    path: '/publications'
  },
  {
    id: 3,
    label: 'respositories',
    path: '/respositories'
  }
]

function NavList() {
  return (
    <ul
      className={classNames(
        'hidden',
        'lg:flex',
        'items-center',
        'justify-start',
        'mr-4',
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
              'p-4',
              'px-6',
              'text-base',
              'uppercase',
              'font-medium',
              'text-gray-400',
              'bg-white',
              'rounded-lg',
              'border-0',
              'transition-all',
              'duration-300',
              'hover:text-blue-500',
            )}
          >
            {label}
          </Link>
        ))
      }
    </ul>
  )
}

function Navbar() {
  return (
    <nav
      className={classNames(
        'z-10',
        'flex',
        'items-center',
        'w-full',
        'h-16',
        'bg-white',
        'border-b-2',
        'border-gray-200',
      )}
    >
      <Container>
        <Grid
          className='grid grid-cols-4 lg:grid-cols-2 items-center'
        >
          <Button
            icon='menu'
            size='sm'
            variant='text'
            color='gray'
            pill
            className='lg:hidden'
          />

          <Typography
            variant='h5'
            color='gray'
            className='col-span-2 lg:col-span-1 lg:text-2xl text-center lg:text-start !uppercase'
          >
            Istiaq Uddin
          </Typography>

          <Flex
            items='center'
            justify='end'
          >
            <NavList />

            <Button
              icon='sun'
              size='sm'
              variant='text'
              color='gray'
              pill
            />
          </Flex>
        </Grid>
      </Container>
    </nav>
  )
}

export default Navbar
