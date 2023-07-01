import PropTypes from 'prop-types'

import parser from "html-react-parser"

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
        classes={[
          'card__description'
        ]}
      >
        {parser(description)}
      </Paragraph>
    </Box>
  )
}

Body.propTypes = {
  description: PropTypes.string
}

export default Body
