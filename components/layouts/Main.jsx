import PropTypes from 'prop-types'

import classNames from 'classnames'

function Main({
  children,
  className
}) {
  return (
    <main
      className={classNames(
        'relative',
        className
      )}
    >
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Main
