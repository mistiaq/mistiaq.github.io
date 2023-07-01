import React from 'react'

import classNames from "classnames"

function Textfield({ icon, type, name, placeholder }) {
  const handleFocus = (e) => {
    e.target.parentElement.classList.add("focused");

    // e.target.parentElement.classList.remove("valid");
    // e.target.parentElement.classList.remove("invalid");
  };

  const handleBlur = (e) => {
    e.target.parentElement.classList.remove("focused");

    // if (e.target.value !== "") {
    //   e.target.parentElement.classList.add("filled");

    //   e.target.parentElement.classList.add("valid");
    //   e.target.parentElement.classList.remove("invalid");
    // }

    // if (e.target.value === "") {
    //   e.target.parentElement.classList.remove("filled");

    //   e.target.parentElement.classList.remove("valid");
    //   e.target.parentElement.classList.add("invalid");
    // }
  };

  return (
    <div
      className="input-group"
    >
      {
        icon &&
        <span
          className="input-group__icon input-group__icon--prepend"
        >
          {icon}
        </span>
      }

      <input
        type={type}
        name={name}
        className="input-group__control"
        placeholder={placeholder}

        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

// const TextField = ({
//   type,
//   name,
//   value,
//   refs,
//   classes,
//   utilities,
//   placeholder,
//   disabled,
//   focus,
//   change
// }) => {
//   return (
//     <input
//       type={type}
//       name={name}
//       ref={refs}
//       value={value}
//       className={classNames(
//         "input-group__control",
//         classes,
//         utilities &&
//         Object.entries(utilities).map(
//           ([utility, value]) =>
//             value &&
//             Object.entries(value).map(([breakpoint, values]) =>
//               breakpoint === "_"
//                 ? `${utility}-${values}`
//                 : `${utility}-${breakpoint}-${values}`
//             )
//         )
//       )}
//       placeholder={placeholder}
//       disabled={disabled}
//       onFocus={focus}
//       onChange={change}
//     />
//   );
// }

export default Textfield
