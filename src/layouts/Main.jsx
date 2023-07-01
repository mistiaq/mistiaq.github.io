import PropTypes from 'prop-types'

import classNames from 'classnames'

function Main({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <main
      className={classNames(
        'main',
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
    </main>
  )
}

Main.propTypes = {
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Main
