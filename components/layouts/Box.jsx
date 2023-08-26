import {
  forwardRef
} from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

const Box = forwardRef(function Box(
  {
    className,
    children,
    ...props
  }, ref
) {
  return (
    <div
      ref={ref}
      className={classNames(
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Box
