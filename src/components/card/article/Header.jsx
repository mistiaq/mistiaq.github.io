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
  title,
  slug,
  paper,
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
        <Badge>Category</Badge>

        <Divider
          circle
        />

        <Small>
          {
            date && moment(date).format('D MMM YYYY')
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
          path={`http://localhost:1337${paper}`}
        >
          {title}
        </DynamicLink>
      </Heading>
    </Box>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  paper: PropTypes.url,
  date: PropTypes.string
}

export default Header
