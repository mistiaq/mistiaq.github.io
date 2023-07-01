import PropTypes from 'prop-types'

import classNames from "classnames"

function Divider({
  light,
  vertical,
  circle,
  classes,
  utilities,
  style
}) {
  return (
    <hr
      className={classNames(
        "divider",
        { [`divider--light`]: light },
        { [`divider--vertical`]: vertical },
        { [`divider--circle`]: circle },
        classes,
        utilities &&
        Object.entries(utilities).map(
          ([utility, value]) =>
            value &&
            Object.entries(value).map(([breakpoint, values]) =>
              breakpoint === "_"
                ? `${utility}-${values}`
                : `${utility}-${breakpoint}-${values}`
            )
        )
      )}
      style={style}
    />
  )
}

Divider.propTypes = {
  light: PropTypes.bool,
  vertical: PropTypes.bool,
  circle: PropTypes.bool,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object
}

export default Divider
