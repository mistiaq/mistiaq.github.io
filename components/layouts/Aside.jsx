import Link from 'next/link'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import Typography from '@components/core/Typography'

import Section from '@components/layouts/Section'

const links = [
  {
    id: 1,
    label: 'writing',
    path: '/writing'
  },
  {
    id: 2,
    label: 'technology',
    path: '/technology'
  },
  {
    id: 3,
    label: 'Coding',
    path: '/Coding'
  },
  {
    id: 1,
    label: 'writing',
    path: '/writing'
  },
  {
    id: 2,
    label: 'technology',
    path: '/technology'
  }
]

function NavList() {
  return (
    <ul
      className={classNames(
        'flex',
        'flex-wrap',
        'items-center',
        'justify-start',
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
              'p-2',
              'px-6',
              'text-sm',
              'uppercase',
              'font-medium',
              'text-gray-400',
              'bg-white',
              'border-2',
              'rounded-full',
              'transition-all',
              'duration-300',
              'hover:text-blue-500',
              'hover:border-blue-500',
            )}
          >
            {label}
          </Link>
        ))
      }
    </ul>
  )
}

function Aside({
  className
}) {
  return (
    <aside
      className={classNames(
        'py-16',
        'sm:px-16',
        'md:px-0',
        className
      )}
    >
      <Section
        utilities={{
          pt: { _: 6 }
        }}
      >
        <Typography
          variant='h6'
          className='mb-8'
        >
          Populer Tags
        </Typography>

        <NavList />
      </Section>
    </aside>
  )
}

Aside.propTypes = {
  className: PropTypes.string
}

export default Aside
