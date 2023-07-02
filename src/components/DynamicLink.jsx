import {
  Link
} from "react-router-dom"

import classNames from "classnames"

function DynamicLink({
  path,
  classes,
  utilities,
  style,
  children
}) {
  return (
    <Link
      to={path}
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
    </Link>
  )
}

export default DynamicLink