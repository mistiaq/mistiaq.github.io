import PropTypes from 'prop-types'

import Box from '../layouts/Box'

import Image from './Image'

function Avatar({
  size,
  image = false,
  name = false,
  classes,
  utilities
}) {
  return (
    <Box
      classes={[
        'avatar',
        size && `avatar--${size}`,
        classes
      ]}
      utilities={utilities}
    >
      {
        (image && image !== '')
          ?
          <Image
            src={image}
            alt={name ? name : undefined}
            classes={[
              'avatar__img'
            ]}
          />
          : name && name.charAt(0)
      }
    </Box>
  )
}

Avatar.propTypes = {
  size: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  classes: PropTypes.array,
  utilities: PropTypes.object
}

export default Avatar
