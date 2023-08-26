import PropTypes from 'prop-types'

import classNames from 'classnames'

import parser from 'html-react-parser'

import Link from 'next/link'

import Typography from '@components/core/Typography'
import Button from '@components/core/Button'

import Box from '@components/layouts/Box'
import Flex from '@components/layouts/Flex'

function Card({
  title,
  description = '',
  category,
  date,
  code = '',
  paper = '',
  className
}) {
  return (
    <article
      className={classNames(
        'flex',
        'flex-col',
        'gap-4',
        'p-6',
        'border-2',
        'rounded-xl',
        className
      )}
    >
      <Box>
        <Typography
          variant='h4'
        >
          <Link
            href={`/`}
          >
            {title}
          </Link>
        </Typography>
      </Box>

      <Box>
        <Typography
          variant='paragraph'
        >
          {parser(description)}
        </Typography>
      </Box>

      <Flex
        flex='wrap'
        items='center'
        justify='between'
        gap={4}
      >
        <Flex
          items='center'
          className='mb-2'
        >
          <Box>
            {category}
          </Box>

          <Box
            className='w-1 h-1 mx-3 bg-gray-400 rounded-full'
          />

          <Typography
            as='small'
          >
            {date}
          </Typography>
        </Flex>

        <Flex
          flex='nowrap'
          items='center'
          justify='between'
          gap={4}
          className='w-full md:w-auto'
        >
          {/* <Button
            size='sm'
            variant='toned'
            color='gray'
            className='w-1/2 md:w-auto'
          >
            Code
          </Button> */}

          <Link
            href={code}
          >
            Code
          </Link>

          <Link
            href={paper}
          >
            Paper
          </Link>

          {/* <Button
            size='sm'
            variant='filled'
            color='black'
            className='w-1/2 md:w-auto'
          >
            PDF
          </Button> */}
        </Flex>
      </Flex>
    </article>
  )
}

Card.propTypes = {
  description: PropTypes.string,
  className: PropTypes.string
}

export default Card
