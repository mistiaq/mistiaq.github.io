import PropTypes from 'prop-types'

import {
  Span
} from '../../components/Typography'
import Button from '../../components/Button'

const MenuIcon = () => {
  return (
    <Span
      classes={[
        'menu-icon'
      ]}
    >
      <Span
        classes={[
          'menu-icon__bar',
          'bar-1'
        ]}
      />
      <Span
        classes={[
          'menu-icon__bar',
          'bar-2'
        ]}
      />
      <Span
        classes={[
          'menu-icon__bar',
          'bar-3'
        ]}
      />
    </Span>
  )
}

function NavbarToggler({
  sidebarSlide,
  setSidebarSlide
}) {
  return (
    <Button
      onClick={() => {
        setSidebarSlide(true)

        document.body.style.width = '100%'
        document.body.style.position = 'absolute'
        document.body.style.overflow = 'hidden'
      }}
      size='sm'
      variant='text'
      color='dark'
      iconOnly
      classes={[
        `navbar__toggler${sidebarSlide ? ' active' : ''}`
      ]}
    >
      <MenuIcon />
    </Button>
  )
}

NavbarToggler.propTypes = {
  sidebarSlide: PropTypes.bool,
  setSidebarSlide: PropTypes.func
}

export default NavbarToggler
