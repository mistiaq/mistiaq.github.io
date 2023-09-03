import classNames from "classnames"

function Select({
  type,
  sm,
  lg,
  children
}) {
  return (
    <select
      type={type}
      className={classNames(
        "w-52",
        {
          [
            "w-4 h-4"
          ]: type && type === 'checkbox' || type === 'radio'
        },
        {
          [
            "px-8 pt-2 pb-1 text-lg"
          ]: sm
        },
        {
          [
            "px-12 pt-4 pb-3 text-xl"
          ]: lg
        },
        {
          [
            "py-3 px-4 text-base"
          ]: !sm && !lg
        },
        "font-medium",
        "cursor-pointer",
        "bg-white",
        "text-gray-500",
        "outline-none",
        "border-2",
        "border-solid",
        "rounded-lg",
        "shadow-none",
        "transition-all",
        "duration-300",
        "hover:shadow-lg",
      )}
    >
      {children}
    </select>
  )
}

export default Select
