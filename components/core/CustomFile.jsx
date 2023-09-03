import classNames from "classnames"

function CustomFile({
  name,
  placeholder,
  onFocus,
  onChange,
  multiple,
  disabled,
}) {
  return (
    <div
      className={classNames(
        'relative',
        'flex',
        'items-center',
        'justify-center',
        'w-full',
        'h-56',
        'text-gray-400',
        'bg-gray-100',
        'border-2',
        'border-dotted',
        'rounded-lg',
      )}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="512" height="512"
          fill='currentColor'
          className={classNames(
            'w-5',
            'h-5',
            'mr-4',
          )}
        >
          <path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z" />
          <path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z" />
        </svg>
      </span>

      <span>Enter the Memo</span>

      <input
        type='file'
        name={name}
        className={classNames(
          "absolute",
          "top-0",
          "right-0",
          "bottom-0",
          "left-0",
          "opacity-0",
        )}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={onChange}
        multiple={multiple}
        disabled={disabled}
      />
    </div >
  )
}

export default CustomFile
