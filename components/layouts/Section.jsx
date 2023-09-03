import PropTypes from 'prop-types'

import classNames from 'classnames'

function Section({
  className,
  children
}) {
  return (
    <section
      className={classNames(
        className
      )}
    >
      {children}
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Section
