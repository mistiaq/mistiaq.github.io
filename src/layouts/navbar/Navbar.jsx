import PropTypes from 'prop-types'

import classNames from 'classnames'

import Container from '../Container'

import NavbarBrand from './NavbarBrand'
import NavbarMenu from './NavbarMenu'
import NavbarToggler from './NavbarToggler'

function Navbar({
  expand,
  sidebarSlide,
  setSidebarSlide
}) {
  return (
    <nav
      className={classNames(
        'navbar',
        { [`navbar--expand-${expand}`]: expand }
      )}
    >
      <Container>
        <NavbarBrand />

        <NavbarToggler
          sidebarSlide={sidebarSlide}
          setSidebarSlide={setSidebarSlide}
        />

        <NavbarMenu />
      </Container>
    </nav>
  )
}

Navbar.defaultProps = {
  expand: 'md'
}

Navbar.propTypes = {
  expand: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
    'xl'
  ]),
  sidebarSlide: PropTypes.bool,
  setSidebarSlide: PropTypes.func
}

export default Navbar
