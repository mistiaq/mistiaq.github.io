import PropTypes from 'prop-types'

import moment from 'moment'

import parser from "html-react-parser"

import {
  Paragraph
} from '../../Typography'

import Box from '../../../layouts/Box'

function Event({
  key,
  news,
  date
}) {
  return (
    <Box
      key={key}
      classes={[
        'card',
        'card--events',
      ]}
    >
      <Paragraph
        utilities={{
          w: { lg: 25 }
        }}
      >
        {moment(date).format('MMM D, YYYY')}
      </Paragraph>

      <Paragraph
        utilities={{
          w: { lg: 75 },
          mb: { _: 0 }
        }}
      >
        {parser(news)}
      </Paragraph>
    </Box>
  )
}

Event.propTypes = {
  key: PropTypes.string,
  news: PropTypes.string,
  date: PropTypes.string
}

export default Event
