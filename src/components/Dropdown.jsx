import React, {
  useRef,
  useEffect
} from "react"

import classNames from "classnames"

import {
  motion
} from "framer-motion"

import {
  ChevronDown
} from "react-feather"

const itemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, x: 10, transition: { duration: 0.2 } }
}

const useOutsideClick = (ref, modal, setModal) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModal(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, modal, setModal])
}

function Dropdown({
  dropdownItem,
  dropdown,
  setDropdown,
  text,
  right
}) {
  const wrapperRef = useRef(null)

  useOutsideClick(wrapperRef, dropdown, setDropdown);

  return (
    <motion.nav
      ref={wrapperRef}
      initial={false}
      animate={dropdown ? "open" : "closed"}
      className="dropdown"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setDropdown(!dropdown)}
        className="btn btn--extended btn--tonal-light dropdown__toggle w-100 w-md-auto"
      >
        {
          text
        }

        <motion.div
          variants={{
            open: { rotate: -180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          className="dropdown__toggle-icon"
        >
          <ChevronDown className="fe" />
        </motion.div>
      </motion.button>

      <motion.ul
        className={classNames(
          "dropdown__menu",
          "top-100",
          { [`dropdown__menu--show`]: dropdown },
          { [`dropdown__menu--right`]: right },
        )}
        style={{
          pointerEvents: dropdown ? "auto" : "none"
        }}
      >
        {
          dropdownItem && dropdownItem.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </motion.ul>
    </motion.nav>
  )
}

export default Dropdown