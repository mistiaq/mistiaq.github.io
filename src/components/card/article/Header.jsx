import PropTypes from 'prop-types'

import moment from 'moment'

import {
  Heading, Small
} from '../../Typography'
import DynamicLink from '../../DynamicLink'
import Divider from '../../Divider'
import Badge from '../../Badge'

import Box from '../../../layouts/Box'

function Header({
  category,
  title,
  paperURL,
  date
}) {
  return (
    <Box
      classes={[
        'card__header'
      ]}
    >
      <Box
        utilities={{
          d: { _: 'flex' },
          gap: { _: 4 },
          'align-items': { _: 'center' },
          mb: { _: 4 }
        }}
      >
        <Badge>{category}</Badge>

        <Divider
          circle
        />

        <Small>
          {
            date && moment(date).format('MMM D, YYYY')
          }
        </Small>
      </Box>

      <Heading
        as='h6'
        display
        classes={[
          'card__title'
        ]}
      >
        <DynamicLink
          path={`http://localhost:1337${paperURL}`}
        >
          {title}
        </DynamicLink>
      </Heading>
    </Box>
  )
}

Header.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  // paperURL: PropTypes.func,
  date: PropTypes.string
}

export default Header
