import PropTypes from 'prop-types'

import classNames from 'classnames'

function Badge({
  variant,
  color,
  classes,
  utilities,
  children
}) {
  return (
    <div
      className={classNames(
        'badge',
        { [`badge--${variant}-${color}`]: variant && color },
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
    >
      {children}
    </div>
  );
}

Badge.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Badge
