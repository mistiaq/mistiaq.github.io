import PropTypes from 'prop-types'

import moment from 'moment'

import {
  Small
} from '../../Typography'
import DynamicLink from '../../DynamicLink'
import Icon from '../../Icon'
import Divider from '../../Divider'
import Badge from '../../Badge'
import Button from '../../Button'

import Box from '../../../layouts/Box'

function Footer({
  uploadedAt
}) {
  return (
    <Box
      classes={[
        'card__footer'
      ]}
    >
      <Box
        utilities={{
          d: { _: 'flex' },
          gap: { _: 4 },
          'align-items': { _: 'center' }
        }}
      >
        <DynamicLink
          path={`/blogs/${'category'}`}
        >
          <Badge
            variant='outline'
            color='primary'
          >
            {'category'}
          </Badge>
        </DynamicLink>

        <Divider
          circle
        />

        <Small>
          {
            uploadedAt && moment(uploadedAt).format('MMM D, YYYY')
          }
        </Small>
      </Box>

      <Box>
        <Button
          size='sm'
          variant='text'
          color='dark'
          iconOnly
        >
          <Icon
            name='bookmark'
          />
        </Button>

        <Button
          size='sm'
          variant='text'
          color='dark'
          iconOnly
        >
          <Icon
            name='menu-dot-vertical'
          />
        </Button>
      </Box>
    </Box>
  )
}

Footer.propTypes = {
  uploadedAt: PropTypes.date
}

export default Footer
