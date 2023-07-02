import PropTypes from 'prop-types'

import Box from './Box'

function Backdrop({
  classes,
  utilities,
  style
}) {
  return (
    <Box
      classes={[
        'backdrop',
        classes
      ]}
      utilities={utilities}
      style={style}
    />
  )
}

Backdrop.propTypes = {
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object
}

export default Backdrop
