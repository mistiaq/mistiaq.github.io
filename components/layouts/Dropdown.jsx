'use client'

import {
  useState,
  useRef,
  useEffect
} from 'react'

import classNames from 'classnames'

import {
  motion
} from 'framer-motion'
import Link from 'next/link'

const links = [
  {
    id: 1,
    label: 'profile',
    path: 'profile'
  },
  {
    id: 2,
    label: 'logout',
    path: 'logout'
  }
]

function useOutsideClick(
  ref,
  modal,
  setModal
) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModal(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [
    ref,
    modal,
    setModal
  ])
}

function Dropdown() {
  const [dropdownExpand, setDropdownExpand] = useState(false)

  const [selected, setSelected] = useState(links[1])

  const modalRef = useRef(null)

  useOutsideClick(modalRef, dropdownExpand, setDropdownExpand)

  return (
    <motion.div
      ref={modalRef}
      initial={false}
      animate={
        dropdownExpand ? 'expanded' : 'collapsed'
      }
      className='relative'
    >
      <button
        type='button'
        onClick={() => setDropdownExpand(!dropdownExpand)}
        className={classNames(
          'flex',
          'gap-4',
          'items-center',
          'w-60',
          'text-base',
          'text-left',
          'font-medium',
          'capitalize',
          'cursor-pointer',
          'text-gray-500',
          'outline-none',
          'rounded-lg',
          'transition-all',
          'duration-300',
        )}
      >
        <span
          className={classNames(
            'flex',
            'items-center',
            'justify-center',
            'w-10',
            'h-10',
            'p-1',
            'border-2',
            'rounded-full',
          )}
        >
          <img
            src='https://eduport.webestica.com/assets/images/avatar/11.jpg'
            alt=''
            className={classNames(
              'w-full',
              'rounded-full',
            )}
          />
        </span>

        <div
          href='#'
          className={classNames(
            'block',
            'text-base',
            'font-medium',
            'whitespace-nowrap',
            'text-gray-500',
          )}
        >
          Mahim Farhad
          <small
            className={classNames(
              'block',
              '-mt-1',
              'text-gray-500',
            )}
          >
            Admin
          </small>
        </div>

        <motion.span
          variants={{
            collapsed: { rotate: 0 },
            expanded: { rotate: -180 }
          }}
          transition={{ duration: 0.3 }}
          className={classNames(
            'ml-auto'
          )}
        >
          <svg
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-5 w-5 text-gray-400'
          >
            <path
              d='M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z'
            />
          </svg>
        </motion.span>
      </button>

      {
        dropdownExpand &&
        <motion.ul
          initial={{ opacity: 0, y: '-1.5rem' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={classNames(
            'z-10',
            'absolute',
            'w-full',
            'max-h-56',
            'py-1',
            'mt-2',
            'overflow-auto',
            'bg-white',
            'text-gray-500',
            'border-2',
            'rounded-lg',
            'shadow-md',
          )}
        >
          {links.map((dropdownItem) => (
            <li
              key={dropdownItem.id}
              onClick={() => {
                selected.id !== dropdownItem.id &&
                  setSelected(links[dropdownItem.id - 1])
                setDropdownExpand(false)
              }}
            >
              <Link
                href={dropdownItem.path}
                className={classNames(
                  'relative',
                  'block',
                  'py-2',
                  'px-4',
                  'text-base',
                  'font-medium',
                  'capitalize',
                  'cursor-pointer',
                  'select-none',
                  'text-gray-500',
                )}
              >
                {dropdownItem.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      }
    </motion.div>
  )
}

export default Dropdown
