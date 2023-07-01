import PropTypes from 'prop-types'

import classNames from 'classnames'

function Section({
  id,
  classes,
  utilities,
  style,
  children
}) {
  return (
    <section
      id={id}
      className={classNames(
        'section',
        classes,
        utilities &&
        Object.entries(utilities).map(
          ([utility, value]) =>
            value &&
            Object.entries(value).map(([breakpoint, values]) =>
              breakpoint === '_'
                ? `${utility}-${values}`
                : `${utility}-${breakpoint}-${values}`
            )
        )
      )}
      style={style}
    >
      {children}
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Section
