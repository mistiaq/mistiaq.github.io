'use client'

import Link from 'next/link'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import parser from 'html-react-parser'

import moment from 'moment/moment'

import Typography from '@components/core/Typography'

import Box from '@components/layouts/Box'
import Flex from '@components/layouts/Flex'

function Card({
  title,
  slug,
  description,
  category,
  date,
  code,
  className
}) {
  return (
    <article
      className={classNames(
        'flex',
        'flex-col',
        'gap-4',
        'p-0',
        'border-0',
        'rounded-none',
        className
      )}
    >
      <Box>
        <Typography
          variant='h4'
          className='max-sm:text-xl sm:text-3xl'
        >
          <Link
            href={`/publications/${slug}`}
          >
            {title}
          </Link>
        </Typography>
      </Box>

      <Box>
        <Typography
          variant='paragraph'
        >
          {description && parser(description)}
        </Typography>
      </Box>

      <Flex
        flex='wrap'
        items='center'
        justify='between'
        className='gap-6'
      >
        <Flex
          items='center'
        >
          <Typography
            variant='small'
            className='font-medium text-blue-500'
          >
            {category.toUpperCase()}
          </Typography>

          <Box
            className='w-1 h-1 mx-3 bg-gray-400 rounded-full'
          />

          <Typography
            variant='small'
            className='font-medium text-gray-400'
          >
            {moment(date).format('MMM DD, YYYY').toUpperCase()}
          </Typography>
        </Flex>

        <Flex
          flex='nowrap'
          items='center'
          justify='between'
          gap={4}
          className='w-full md:w-auto'
        >
          <Link
            href={code}
            className={classNames(
              'w-full',
              'p-2',
              'px-6',
              'text-sm',
              'uppercase',
              'font-medium',
              'text-center',
              'text-gray-400',
              'bg-white',
              'border-2',
              'rounded-full',
              'transition-all',
              'duration-300',
              'hover:text-black',
              'hover:border-black',
            )}
          >
            Read
          </Link>

          <Link
            href={`/publications/${slug}`}
            className={classNames(
              'w-full',
              'p-2',
              'px-6',
              'text-sm',
              'uppercase',
              'font-medium',
              'text-center',
              'text-gray-200',
              'bg-gray-600',
              'border-2',
              'border-transparent',
              'rounded-full',
              'transition-all',
              'duration-300',
              'hover:shadow-lg',
              'hover:shadow-gray-200',
            )}
          >
            Download
          </Link>
        </Flex>
      </Flex>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  code: PropTypes.string,
  className: PropTypes.string
}

export default Card
