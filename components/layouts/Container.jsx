import PropTypes from 'prop-types'

import classNames from 'classnames'

function Container({
  children,
  className
}) {
  return (
    <div
      className={classNames(
        'container',
        'max-w-full',
        'px-4',
        'md:px-16',
        'mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Container
