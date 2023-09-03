import Link from 'next/link'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import fetchQuery from '@utils/fetch'

import Typography from '@components/core/Typography'

import Section from '@components/layouts/Section'

function NavList({
  data
}) {
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
        data && data.map((category) => (
          <Link
            key={category.id}
            href={category.attributes.name}
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
            {category.attributes.name}
          </Link>
        ))
      }
    </ul>
  )
}

async function Aside({
  className
}) {
  const data = await fetchQuery('categories?populate=*')

  return (
    <aside
      className={classNames(
        'py-16',
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

        <NavList
          data={data}
        />
      </Section>
    </aside>
  )
}

Aside.propTypes = {
  className: PropTypes.string
}

export default Aside
