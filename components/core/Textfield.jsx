import classNames from "classnames"

function Textfield({
  type,
  name,
  sm,
  lg,
  className,
  placeholder,
  onFocus,
  onChange,
  multiple,
  disabled,
}) {
  return (
    <input
      type={type}
      name={name}
      className={classNames(
        {
          [
            "w-max"
          ]: type !== 'checkbox' && type !== 'radio'
        },
        {
          [
            "w-4 h-4"
          ]: type && type === 'checkbox' || type === 'radio'
        },
        {
          [
            "h-10 px-4 pt-0.5 pb-0 text-base"
          ]: sm
        },
        {
          [
            "px-12 pt-4 pb-3 text-xl"
          ]: lg
        },
        {
          [
            "h-12 py-3 px-4 text-base"
          ]: !sm && !lg
        },
        "font-medium",
        "cursor-pointer",
        "bg-white",
        "text-gray-400",
        "placeholder:text-gray-300",
        "outline-none",
        "border-2",
        "rounded-lg",
        "shadow-md",
        "transition-all",
        "duration-300",
        "hover:border-transparent",
        "hover:shadow-lg",
        className
      )}
      placeholder={placeholder}
      onFocus={onFocus}
      onChange={onChange}
      multiple={multiple}
      disabled={disabled}
    />
  )
}

export default Textfield
