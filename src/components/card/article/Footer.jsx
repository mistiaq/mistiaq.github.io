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
        size='xs'
        variant='outline'
        utilities={{
          w: { _: 50, sm: 'auto' }
        }}
      >
        Code
      </Button>

      <DynamicLink
        path={`${paperURL}`}
        classes={[
          'btn',
          'btn--xs',
          'btn--fill-primary',
          'btn--link'
        ]}
        utilities={{
          w: { _: 50, sm: 'auto' }
        }}
      >
        PDF
      </DynamicLink>
    </Box>
  )
}

// Footer.propTypes = {
//   paperURL: PropTypes.func
// }

export default Footer
