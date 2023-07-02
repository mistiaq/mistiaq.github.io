import PropTypes from 'prop-types'

import classNames from 'classnames'

const Image = ({
  src,
  alt,
  classes,
  utilities
}) => {
  return (
    <img
      src={src}
      alt={alt}
      loading='lazy'
      className={classNames(
        'img-fluid',
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
    />
  )
}

Image.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string,
  classes: PropTypes.array,
  utilities: PropTypes.any,
}

export default Image
