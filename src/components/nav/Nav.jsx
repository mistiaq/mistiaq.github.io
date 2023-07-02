import classNames from "classnames"

const Nav = ({
  vertical,
  classes,
  utilities,
  style,
  children
}) => {
  return (
    <nav
      className={classNames(
        "nav",
        { [`nav--vertical`]: vertical },
        classes,
        utilities &&
        Object.entries(utilities).map(
          ([utility, value]) =>
            value &&
            Object.entries(value).map(([breakpoint, values]) =>
              breakpoint === "_"
                ? `${utility}-${values}`
                : `${utility}-${breakpoint}-${values}`
            )
        ),
      )}
      style={style}
    >
      {children}
    </nav>
  );
};

export default Nav
