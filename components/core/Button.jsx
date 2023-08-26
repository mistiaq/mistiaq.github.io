import {
  forwardRef
} from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import Icon from '@components/core/Icon'

const classes = {
  icon: {
    sizes: {
      sm: 'w-8 h-8',
      base: 'w-12 h-12',
      lg: 'w-14 h-14'
    }
  },
  sizes: {
    sm: 'h-10 py-1 px-10 text-base rounded-lg',
    base: 'h-12 py-2 px-12 text-base rounded-lg',
    lg: 'h-14 py-3 px-16 text-lg rounded-xl'
  },
  variants: {
    filled: {
      primary: 'bg-blue-700 text-white border-transparent shadow-md shadow-blue-500 hover:bg-gray-800 hover:shadow-lg',
      black: 'bg-black text-white border-transparent shadow-none hover:bg-gray-800 hover:shadow-lg',
    },
    gradient: {
      primary: 'bg-gradient-to-r from-gray-800 to-gray-500 text-white border-transparent hover:bg-gray-100',
    },
    toned: {
      primary: 'bg-blue-100 text-black border-transparent hover:bg-gray-100',
      gray: 'bg-gray-100 text-black border-transparent hover:bg-gray-100',
    },
    outlined: {
      primary: 'bg-transparent text-black border-black hover:bg-gray-100',
      gray: 'bg-transparent text-gray-400 hover:bg-gray-100',
    },
    text: {
      primary: 'bg-transparent text-black border-transparent hover:bg-gray-100',
      gray: 'bg-transparent text-gray-400 border-transparent hover:bg-gray-100',
    }
  }
}

const Button = forwardRef(function Button(
  {
    type = 'button',
    extended = false,
    icon,
    size = 'base',
    variant = 'filled',
    color = 'primary',
    pill = false,
    disabled = false,
    children,
    className,
    ...props
  }, ref
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={classNames(
        'relative',
        { ['inline-block']: !extended },
        {
          [
            'inline-flex items-center gap-4'
          ]: extended
        },
        {
          [
            classes.icon.sizes[size]
          ]: icon && size
        },
        {
          [
            classes.sizes[size]
          ]: !icon && size
        },
        'capitalize',
        'font-medium',
        {
          [
            'text-gray-400'
          ]: !color
        },
        {
          [
            classes.variants[variant][color]
          ]: variant && color
        },
        {
          [
            'opacity-25 cursor-not-allowed'
          ]: disabled
        },
        'whitespace-nowrap',
        'select-none',
        'outline-0',
        'border-2',
        { ['rounded-lg']: !pill },
        { ['rounded-full']: pill },
        'transition-all',
        'ease-in-out',
        'duration-300',
        className
      )}
      {...props}
    >
      {
        (icon || extended) && (
          <Icon
            name={icon}
            className={classNames(
              {
                [
                  'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
                ]: icon
              },
              {
                [
                  '!w-4 !h-4'
                ]: icon && size
              },
            )}
          />
        )
      }

      {!icon && children}
    </button>
  )
})

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf([
    'button',
    'submit'
  ]),
  extended: PropTypes.bool,
  icon: PropTypes.string,
  size: PropTypes.oneOf([
    'sm',
    'base',
    'lg'
  ]),
  variant: PropTypes.oneOf([
    'filled',
    'gradient',
    'toned',
    'outlined',
    'text'
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'succcess',
    'warning',
    'error'
  ]),
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

export default Button
