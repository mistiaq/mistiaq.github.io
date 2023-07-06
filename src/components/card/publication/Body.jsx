import PropTypes from 'prop-types'

import parser from 'html-react-parser'

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
      <Box
        className='card__description'
      >
        {parser(description)}
      </Box>
    </Box>
  )
}

Body.propTypes = {
  description: PropTypes.string
}

export default Body
