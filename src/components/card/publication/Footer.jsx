import PropTypes from 'prop-types'

import DynamicLink from '../../DynamicLink'
import Button from '../../Button'

import Box from '../../../layouts/Box'

function Footer({
  paperURL
}) {
  return (
    <Box
      classes={[
        'card__footer'
      ]}
    >
      <Button
        size='sm'
        variant='outline'
        color='dark'
        utilities={{
          w: { _: 50, sm: 'auto' },
          px: { sm: 8 }
        }}
      >
        Code
      </Button>

      <DynamicLink
        path={`https://strapi-development-tb5n.onrender.com${paperURL}`}
        classes={[
          'btn',
          'btn--sm',
          'btn--tonal-primary',
          'btn--link'
        ]}
        utilities={{
          w: { _: 50, sm: 'auto' },
          px: { sm: 8 }
        }}
      >
        PDF
      </DynamicLink>
    </Box>
  )
}

Footer.propTypes = {
  paperURL: PropTypes.url
}

export default Footer
