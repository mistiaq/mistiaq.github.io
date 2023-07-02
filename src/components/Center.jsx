import React from "react"

import classNames from "classnames"

function Center({
  ref,
  classes,
  utilities,
  style,
  children
}) {
  return (
    <center
      ref={ref}
      className={classNames(
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
    >
      {children}
    </center>
  )
}

export default Center
