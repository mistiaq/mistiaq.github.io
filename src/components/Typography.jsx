import React from "react"

import PropTypes, { node } from "prop-types"

import classNames from "classnames"

function Heading({
  as,
  display,
  classes,
  utilities,
  style,
  children
}) {
  return (
    <React.Fragment>
      {(as === "h1" && (
        <h1
          className={classNames(
            { [`display-1`]: display },
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
            )
          )}
          style={style}
        >
          {children}
        </h1>
      )) ||
        (as === "h2" && (
          <h2
            className={classNames(
              { [`display-2`]: display },
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
              )
            )}
            style={style}
          >
            {children}
          </h2>
        )) ||
        (as === "h3" && (
          <h3
            className={classNames(
              { [`display-3`]: display },
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
              )
            )}
            style={style}
          >
            {children}
          </h3>
        )) ||
        (as === "h4" && (
          <h4
            className={classNames(
              { [`display-4`]: display },
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
              )
            )}
            style={style}
          >
            {children}
          </h4>
        )) ||
        (as === "h5" && (
          <h5
            className={classNames(
              { [`display-5`]: display },
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
              )
            )}
            style={style}
          >
            {children}
          </h5>
        )) ||
        (as === "h6" && (
          <h6
            className={classNames(
              { [`display-6`]: display },
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
              )
            )}
            style={style}
          >
            {children}
          </h6>
        ))}
    </React.Fragment>
  )
}

function Paragraph({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <p
      className={classNames(
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
        )
      )}
      style={style}
    >
      {children}
    </p>
  )
}

function Blockquote({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <blockquote
      className={classNames(
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
        )
      )}
      style={style}
    >
      {children}
    </blockquote>
  )
}

function AnchorTag({
  path,
  classes,
  utilities,
  style,
  children
}) {
  return (
    <a
      href={path}
      className={classNames(
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
        )
      )}
      style={style}
    >
      {children}
    </a>
  )
}

function Small({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <small
      className={classNames(
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
        )
      )}
      style={style}
    >
      {children}
    </small>
  )
}

function Mark({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <mark
      className={classNames(
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
        )
      )}
      style={style}
    >
      {children}
    </mark>
  )
}

function Span({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <span
      className={classNames(
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
        )
      )}
      style={style}
    >
      {children}
    </span>
  )
}

function Address({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <address
      className={classNames(
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
        )
      )}
      style={style}
    >
      {children}
    </address>
  )
}

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  display: PropTypes.bool,
  children: node,
}

export {
  Heading,
  Paragraph,
  Blockquote,
  AnchorTag,
  Small,
  Mark,
  Span,
  Address
}
