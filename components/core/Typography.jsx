import {
  forwardRef
} from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import {
  teko
} from '@utils/fonts'

const classes = {
  variants: {
    h1: 'block antialiased tracking-normal text-5xl font-semibold leading-tight',
    h2: 'block antialiased tracking-normal text-4xl font-semibold leading-[1.3]',
    h3: 'block antialiased tracking-normal text-3xl font-semibold leading-snug',
    h4: 'block antialiased tracking-normal text-2xl font-semibold leading-snug',
    h5: 'block antialiased tracking-normal text-xl font-semibold leading-snug',
    h6: 'block antialiased tracking-normal text-base font-semibold leading-snug',
    lead: 'block antialiased tracking-normal text-lg font-normal leading-relaxed',
    paragraph: 'block antialiased tracking-normal text-base font-light text-gray-400 leading-relaxed',
    small: 'block antialiased tracking-normal text-sm font-light leading-relaxed',
  },
  colors: {
    inherit: 'text-inherit',
    current: 'text-current',
    gray: 'text-gray-400',
    white: 'text-white',
    black: 'text-black',
  }
}

const Typography = forwardRef(function Typography(
  {
    variant = 'paragraph',
    color,
    className,
    children,
    ...props
  }, ref
) {
  return (
    variant && (
      (variant === 'h1') && (
        <h1
          className={classNames(
            teko.className,
            {
              [
                classes.variants[variant]
              ]: variant
            },
            {
              [
                classes.colors[color]
              ]: color
            },
            'select-none',
            className
          )}
          {...props}
        >
          {children}
        </h1>
      )
      ||
      (variant === 'h2') && (
        <h2
          ref={ref}
          className={classNames(
            teko.className,
            'capitalize',
            {
              [
                classes.variants[variant]
              ]: variant
            },
            {
              [
                classes.colors[color]
              ]: color
            },
            'select-none',
            className
          )}
          {...props}
        >
          {children}
        </h2>
      )
      ||
      (variant === 'h3') && (
        <h3
          ref={ref}
          className={classNames(
            teko.className,
            'capitalize',
            {
              [
                classes.variants[variant]
              ]: variant
            },
            {
              [
                classes.colors[color]
              ]: color
            },
            'select-none',
            className
          )}
          {...props}
        >
          {children}
        </h3>
      )
      ||
      (variant === 'h4') && (
        <h4
          ref={ref}
          className={classNames(
            teko.className,
            'capitalize',
            {
              [
                classes.variants[variant]
              ]: variant
            },
            {
              [
                classes.colors[color]
              ]: color
            },
            'select-none',
            className
          )}
          {...props}
        >
          {children}
        </h4>
      )
      ||
      (variant === 'h5') && (
        <h5
          ref={ref}
          className={classNames(
            teko.className,
            'capitalize',
            {
              [
                classes.variants[variant]
              ]: variant
            },
            {
              [
                classes.colors[color]
              ]: color
            },
            'select-none',
            className
          )}
          {...props}
        >
          {children}
        </h5>
      )
      ||
      (variant === 'h6') && (
        <h6
          ref={ref}
          className={classNames(
            teko.className,
            'capitalize',
            {
              [
                classes.variants[variant]
              ]: variant
            },
            {
              [
                classes.colors[color]
              ]: color
            },
            'select-none',
            className
          )}
          {...props}
        >
          {children}
        </h6>
      )
      ||
      (variant === 'lead') && (
        <lead
          ref={ref}
          className={classNames(
            'capitalize',
            {
              [
                classes.variants[variant]
              ]: variant
            },
            {
              [
                classes.colors[color]
              ]: color
            },
            'select-none',
            className
          )}
          {...props}
        >
          {children}
        </lead>
      )
      ||
      (variant === 'paragraph') && (
        <paragraph
          ref={ref}
          className={classNames(
            'capitalize',
            {
              [
                classes.variants[variant]
              ]: variant
            },
            {
              [
                classes.colors[color]
              ]: color
            },
            'select-none',
            className
          )}
          {...props}
        >
          {children}
        </paragraph>
      )
      ||
      (variant === 'small') && (
        <small
          ref={ref}
          className={classNames(
            'capitalize',
            {
              [
                classes.variants[variant]
              ]: variant
            },
            {
              [
                classes.colors[color]
              ]: color
            },
            'select-none',
            className
          )}
          {...props}
        >
          {children}
        </small>
      )
    )
  )
})

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'lead',
    'paragraph',
    'small',
  ]),
  color: PropTypes.oneOf([
    'inherit',
    'current',
    'gray',
    'white',
    'black',
  ]),
  className: PropTypes.string,
  children: PropTypes.node
}

export default Typography
