import PropTypes from 'prop-types'

import classNames from 'classnames'

function Divider({
  vertical,
  className
}) {
  return (
    <hr
      className={classNames(
        {
          ['w-full h-0.5']: !vertical
        },
        {
          ['w-0.5 h-full']: vertical
        },
        'bg-gray-200',
        'border-0',
        className
      )}
    />
  )
}

Divider.propTypes = {
  className: PropTypes.string
}

export default Divider
