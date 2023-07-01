import {
  useEffect,
  useRef
} from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import Divider from '../../components/Divider'
import Button from '../../components/Button'

import Box from '../Box'
import Backdrop from '../Backdrop'
import NavbarBrand from '../navbar/NavbarBrand'

import SidebarMenu from './SidebarMenu'

function useOutsideClick(
  ref,
  modal,
  setModal
) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModal(false)

        document.body.style.width = ''
        document.body.style.position = ''
        document.body.style.overflow = ''
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, modal, setModal])
}

function Sidebar({
  sidebarSlide,
  setSidebarSlide
}) {
  const wrapperRef = useRef(null)

  useOutsideClick(wrapperRef, sidebarSlide, setSidebarSlide)

  return (
    <Box
      classes={[
        'sidebar-wrapper',
        `${sidebarSlide ? 'show' : ''}`
      ]}
    >
      <Backdrop />

      <aside
        ref={wrapperRef}
        className={classNames(
          'sidebar'
        )}
      >
        <Box
          classes={[
            'sidebar__header'
          ]}
        >
          <NavbarBrand />
        </Box>

        <Divider
          utilities={{
            mb: { _: 6 }
          }}
        />

        <SidebarMenu />

        <Divider
          utilities={{
            my: { _: 6 }
          }}
        />

        <Box
          classes={[
            'sidebar__footer'
          ]}
        >
          <Button
            utilities={{
              w: { _: 100 }
            }}
          >
            Subscribe
          </Button>
        </Box>
      </aside>
    </Box>
  )
}

Sidebar.propTypes = {
  sidebarSlide: PropTypes.bool,
  setSidebarSlide: PropTypes.func
}

export default Sidebar
