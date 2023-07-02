import PropTypes from 'prop-types'

import classNames from 'classnames'

function Icon({
  name,
  classes,
  utilities,
  style = {
    stroke: 'transparent'
  }
}) {
  return (
    <>
      {
        (
          name === "brand" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 309.46"
              className={classNames(
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <g>
                <path className="cls-3" d="m180,131.46v88c0,49.63-40.37,90-90,90S0,269.09,0,219.46v-88h40v88c0,27.57,22.43,50,50,50s50-22.43,50-50v-88h40Z" />
                <g>
                  <g>
                    <path className="cls-1" d="m90,105c-28.95,0-52.5-23.55-52.5-52.5S61.05,0,90,0s52.5,23.55,52.5,52.5-23.55,52.5-52.5,52.5Zm0-95c-23.43,0-42.5,19.07-42.5,42.5s19.07,42.5,42.5,42.5,42.5-19.07,42.5-42.5S113.43,10,90,10Z" />
                    <g className="cls-2">
                      <path className="cls-1" d="m90,86c-19.25,2.3-36.23-14.38-36-33.5-.18-14.1,9.3-27.72,22.71-32.08,4.33-1.43,8.9-1.97,13.29-1.42-8.77,1.03-16.72,5.07-22.31,11.19-18.75,20.81-5.3,52.85,22.31,55.81h0Z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect className="cls-1" x="70.4" y="131" width="10" height="71" />
                      <rect className="cls-1" x="100.4" y="131" width="10" height="71" />
                      <rect className="cls-1" x="85.4" y="131" width="10" height="71" />
                    </g>
                    <g>
                      <polygon className="cls-1" points="92.63 240 90 245 87.37 240 92.63 240" />
                      <polygon className="cls-1" points="110 207 95.26 235 84.74 235 70 207 110 207" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          )
        ) || (
          name === "facebook" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <g>
                <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
              </g>
            </svg>
          )
        ) || (
          name === 'whatsapp' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <g>
                <path d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z" />
              </g>
            </svg>
          )
        ) || (
          name === 'twitter' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z" />
            </svg>
          )
        ) || (
          name === 'google' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <g>
                <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
              </g>
            </svg>
          )
        ) || (
          name === 'linked-in' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <g>
                <path d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463" />
              </g>
            </svg>
          )
        ) || (
          name === 'github' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <g>
                <path d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z" />
                <path d="M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z" />
                <path d="M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z" />
                <path d="M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z" />
                <path d="M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z" />
                <path d="M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z" />
                <path d="M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z" />
                <path d="M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z" />
              </g>
            </svg>
          )
        ) || (
          name === 'orcid' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.34 83.12-76.91 0-41.64-26.54-76.9-84.67-76.9zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.14a19.57 19.57 0 1 1 19.57-19.57 19.64 19.64 0 0 1-19.57 19.57zM300 369h-81V161.26h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.39 368.38 369 300 369z" />
            </svg>
          )
        ) || (
          name === 'research-gate' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1.6-33.6.8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9zm-116.5 44.7c-9.4 0-13.6-.3-20-.8v-69.7c6.4-.6 15-.6 22.5-.6 23.3 0 37.2 12.2 37.2 34.5 0 21.9-15 36.6-39.7 36.6z" />
            </svg>
          )
        ) || (
          name === 'arrow-long-right' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M23.124,9.879,18.538,5.293,17.124,6.707l4.262,4.263L0,11l0,2,21.446-.03-4.323,4.323,1.414,1.414,4.587-4.586A3.007,3.007,0,0,0,23.124,9.879Z" />
            </svg>
          )
        ) || (
          name === 'arrow-long-up' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M18.073,4.769,14.154.85a3.072,3.072,0,0,0-4.242,0L5.992,4.769,7.406,6.183l3.633-3.632L11.065,24l2,0L13.039,2.562l3.62,3.621Z" />
            </svg>
          )
        ) || (
          name === 'location-pin' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <g>
                <path d="M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379,214.379-214.379   s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104,512.171z M255.104,46.553   c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473   c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z" />
                <path d="M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978,84.978   S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489,42.489,42.489   s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z" />
              </g>
            </svg>
          )
        ) || (
          name === 'at' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M12,0a12,12,0,1,0,7.092,21.681l-1.184-1.612A10,10,0,1,1,22,12v2a2,2,0,0,1-4,0V12a6.021,6.021,0,1,0-1.48,3.933A3.986,3.986,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z" />
            </svg>
          )
        ) || (
          name === 'phone-call' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M14.2,16.261A12.133,12.133,0,0,1,7.747,9.793l3.4-3.406L4.887.122,1.716,3.292A5.9,5.9,0,0,0,0,7.5C0,14.748,9.252,24,16.5,24a5.889,5.889,0,0,0,4.207-1.716l3.171-3.171-6.265-6.265Zm5.092,4.609A3.9,3.9,0,0,1,16.5,22C10.267,22,2,13.733,2,7.5A3.907,3.907,0,0,1,3.13,4.707L4.887,2.95,8.324,6.387,5.389,9.322l.245.614a14.372,14.372,0,0,0,8.447,8.436l.606.231,2.926-2.927,3.437,3.437ZM14,2V0A10.011,10.011,0,0,1,24,10H22A8.009,8.009,0,0,0,14,2Zm0,4V4a6.006,6.006,0,0,1,6,6H18A4,4,0,0,0,14,6Z" />
            </svg>
          )
        ) || (
          name === 'star' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon icon--sm',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" />
            </svg>
          )
        ) || (
          name === 'dot-circle' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon icon--xs',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm4-10c0,2.209-1.791,4-4,4s-4-1.791-4-4,1.791-4,4-4,4,1.791,4,4Z" />
            </svg>
          )
        ) || (
          name === 'bookmark' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512" height="512"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z" />
            </svg>
          )
        ) || (
          name === 'grip-dot-vertical' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="m17,9c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm0-8c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2ZM7,0c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm0,4c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm10,4c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm-10-5c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z" />
            </svg>
          )
        ) || (
          name === 'heart' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
            </svg>
          )
        ) || (
          name === 'menu-dots-vertical' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <circle cx="12" cy="2" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="22" r="2" />
            </svg>
          )
        ) || (
          name === 'dark' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={classNames(
                'icon',
                classes,
                utilities &&
                Object.entries(utilities).map(
                  ([utility, value]) =>
                    value &&
                    Object.entries(value).map(([breakpoint, values]) =>
                      breakpoint === '_'
                        ? `${utility}-${values}`
                        : `${utility}-${breakpoint}-${values}`
                    )
                )
              )}
              style={style}
            >
              <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm1-13V1c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1Zm0,19v-3c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1ZM5,12c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1Zm19,0c0-.55-.45-1-1-1h-3c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1ZM6.71,6.71c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm14,14c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-16,0l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29ZM18.71,6.71l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z" />
            </svg>
          )
        )
      }
    </>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object
}

export default Icon
