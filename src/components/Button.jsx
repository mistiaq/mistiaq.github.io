import PropTypes from 'prop-types'

import classNames from 'classnames'

const Button = ({
  onClick,
  type,
  name,
  value,
  disabled,
  size,
  variant,
  color,
  extended,
  iconOnly,
  classes,
  utilities,
  style,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      className={classNames(
        'btn',
        {
          [`btn--${size}`]: size,
          [`btn--${variant}-${color}`]: variant && color,
          [`btn--extended`]: extended,
          [`btn--icon-only`]: iconOnly
        },
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
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'fill',
  color: 'primary',
  extended: false,
  iconOnly: false
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'lg'
  ]),
  variant: PropTypes.oneOf([
    'fill',
    'tonal',
    'outline',
    'text'
  ]),
  // color: PropTypes.oneOf([
  //   'primary',
  //   'secondary',
  //   'info',
  //   'success',
  //   'warning',
  //   'error'
  // ]),
  color: PropTypes.string,
  extended: PropTypes.bool,
  iconOnly: PropTypes.bool,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Button
