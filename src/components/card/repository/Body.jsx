import PropTypes from 'prop-types'

import {
  Paragraph
} from '../../Typography'

import Box from '../../../layouts/Box'

function Body({
  description
}) {
  return (

    <Box
      classes={[
        'card__body'
      ]}
    >
      <Paragraph
        className='card__description'
      >
        {description}
      </Paragraph>
    </Box>
  )
}

Body.propTypes = {
  description: PropTypes.string
}

export default Body
