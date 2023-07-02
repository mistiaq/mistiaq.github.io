import PropTypes from 'prop-types'

import classNames from 'classnames'

import Navbar from '../navbar/Navbar'

function Header({
  sidebarSlide,
  setSidebarSlide,
  classes,
  utilities,
  style
}) {
  return (
    <header
      className={classNames(
        'header',
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
      <Navbar
        sidebarSlide={sidebarSlide}
        setSidebarSlide={setSidebarSlide}
      />
    </header>
  )
}

Header.propTypes = {
  sidebarSlide: PropTypes.bool,
  setSidebarSlide: PropTypes.func,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object
}

export default Header
