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

function CustomSelect({
  data,
  placeholder
}) {
  const [open, setOpen] = useState(false)

  const [selected, setSelected] = useState({})

  const modalRef = useRef(null)

  useOutsideClick(modalRef, open, setOpen)

  return (
    <motion.div
      ref={modalRef}
      initial={false}
      animate={
        open ? 'expanded' : 'collapsed'
      }
      className='relative'
    >
      <button
        type='button'
        onClick={() => setOpen(!open)}
        className={classNames(
          'flex',
          'items-center',
          'justify-between',
          'w-full',
          'py-3',
          'px-4',
          'text-base',
          'text-left',
          'font-medium',
          'capitalize',
          'cursor-pointer',
          'bg-white',
          'text-gray-500',
          'outline-none',
          'border-2',
          'rounded-lg',
          'shadow-none',
          'transition-all',
          'duration-300',
          'hover:shadow-lg',
        )}
      >
        {
          Object.keys(selected).length !== 0
            ?
            <span>
              {selected.label}
            </span>
            :
            <span
              className={classNames(
                'opacity-50'
              )}
            >
              {placeholder}
            </span>
        }

        <motion.span
          variants={{
            collapsed: { rotate: 0 },
            expanded: { rotate: -180 }
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="512" height="512"
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
        open &&
        <motion.ul
          initial={{ opacity: 0, y: '-1.5rem' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={classNames(
            'z-10',
            'absolute',
            'w-full',
            'h-[calc(14rem-12px)]',
            'py-1',
            'mt-2',
            'overflow-y-auto',
            'bg-white',
            'text-gray-500',
            'border-2',
            'rounded-lg',
            'shadow-md',
          )}
        >
          {data && data.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                selected && selected.id !== item.id &&
                  setSelected(item)

                setOpen(false)
              }}
              className={classNames(
                'relative',
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
              <span>
                {item.label}
              </span>

              {
                selected && selected.id === item.id && (
                  <span
                    className={classNames(
                      'absolute',
                      'inset-y-0',
                      'right-0',
                      'flex',
                      'items-center',
                      'pr-4',
                      'text-indigo-500',
                    )}
                  >
                    <svg
                      className='h-4 w-4'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </span>
                )}
            </li>
          ))}
        </motion.ul>
      }
    </motion.div>
  )
}

export default CustomSelect
