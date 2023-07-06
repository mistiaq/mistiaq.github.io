import PropTypes from 'prop-types'

import parser from 'html-react-parser'

import {
  Heading
} from '../../Typography'
import DynamicLink from '../../DynamicLink'

import Box from '../../../layouts/Box'

function Body({
  title,
  slug,
  description
}) {
  return (
    <Box
      classes={[
        'card__body'
      ]}
    >
      <Heading
        as='h6'
        display
        classes={[
          'card__title'
        ]}
      >
        <DynamicLink
          path={`/blogs/${slug}`}
        >
          {title}
        </DynamicLink>
      </Heading>

      <Box
        className='card__description'
      >
        {parser(description)}
      </Box>
    </Box>
  )
}

Body.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string
}

export default Body
