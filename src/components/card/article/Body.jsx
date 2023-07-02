import PropTypes from 'prop-types'

import ReactMarkdown from 'react-markdown'

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
      <ReactMarkdown
        className='card__description'
      >
        {description}
      </ReactMarkdown>
    </Box>
  )
}

Body.propTypes = {
  description: PropTypes.string
}

export default Body
