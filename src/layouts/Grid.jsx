import PropTypes from 'prop-types'

import classNames from 'classnames'

import Box from './Box'

function Row({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <Box
      classes={[
        'row',
        classes
      ]}
      utilities={utilities}
      style={style}
    >
      {children}
    </Box>
  )
}

function Column({
  col,
  utilities,
  style,
  children
}) {
  return (
    <div
      className={classNames(
        col &&
        Object.entries(col).map(
          ([breakpoint, value]) =>
            breakpoint === '_'
              ? `col-${value}`
              : `col-${breakpoint}-${value}`
        ),
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
    </div>
  )
}

Row.propTypes = {
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

Column.propTypes = {
  col: PropTypes.objectOf(PropTypes.number).isRequired,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export {
  Row,
  Column
}
