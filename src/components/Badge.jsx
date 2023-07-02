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

export default Badge;
