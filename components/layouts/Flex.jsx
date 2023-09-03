import {
  forwardRef
} from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

const Flex = forwardRef(function Flex(
  {
    flex,
    items,
    justify,
    gap,
    className,
    children,
    ...props
  }, ref
) {
  return (
    <div
      ref={ref}
      className={classNames(
        'flex',
        {
          [
            `flex-${flex}`
          ]: flex
        },
        {
          [
            `items-${items}`
          ]: items
        },
        {
          [
            `justify-${justify}`
          ]: true
        },
        {
          [
            `gap-${gap}`
          ]: gap
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Flex.propTypes = {
  flex: PropTypes.oneOf([
    'auto',
    'initial',
    'none',
    'col',
    'wrap',
    'nowrap',
    'wrap-reverse',
  ]),
  items: PropTypes.oneOf([
    'baseline',
    'start',
    'end',
    'center',
    'stretch'
  ]),
  justify: PropTypes.oneOf([
    'normal',
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
    'stretch'
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Flex
