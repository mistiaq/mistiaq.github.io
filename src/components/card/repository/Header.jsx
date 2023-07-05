import PropTypes from 'prop-types'

import {
  Heading
} from '../../Typography'
import Icon from '../../Icon'
import DynamicLink from '../../DynamicLink'
import Divider from '../../Divider'
import Badge from '../../Badge'

import Box from '../../../layouts/Box'

function Header({
  htmlURL,
  name,
  visibility
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
        <Icon
          name='book'
        />

        <Heading
          as='h6'
          display
          classes={[
            'card__title'
          ]}
        >
          <DynamicLink
            path={htmlURL}
            target='_blank'
            rel='noopener noreferrer'
            utilities={{
              fc: { _: 'primary' }
            }}
          >
            {name}
          </DynamicLink>
        </Heading>

        <Divider
          circle
        />

        <Badge
          variant='outline'
          color='dark'
        >
          {visibility}
        </Badge>
      </Box>
    </Box>
  )
}

Header.propTypes = {
  htmlURL: PropTypes.url,
  name: PropTypes.string,
  visibility: PropTypes.string
}

export default Header
