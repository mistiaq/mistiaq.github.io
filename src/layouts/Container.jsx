import PropTypes from 'prop-types'

import Box from './Box'

function Container({
  fluid,
  expand,
  classes,
  utilities,
  style,
  children
}) {
  return (
    <Box
      classes={[
        `${fluid ? 'container-fluid' : 'container'}`,
        `${expand ? `container-${expand}` : ''}`,
        classes
      ]}
      utilities={utilities}
      style={style}
    >
      {children}
    </Box>
  )
}

Container.defaultProps = {
  fluid: false
}

Container.propTypes = {
  fluid: PropTypes.bool,
  expand: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
    'xl'
  ]),
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Container
