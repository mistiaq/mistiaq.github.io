import PropTypes from 'prop-types'

import {
  Span
} from '../../Typography'
import DynamicLink from '../../DynamicLink'

import Box from '../../../layouts/Box'

function Footer({
  htmlURL,
  language,
  watchers,
  forks
}) {
  function getRandomColor(name) {
    const firstAlphabet = name.charAt(0).toLowerCase()

    const asciiCode = firstAlphabet.charCodeAt(0)

    const colorNum = asciiCode.toString() + asciiCode.toString() + asciiCode.toString()

    var num = Math.round(0xffffff * parseInt(colorNum))
    var r = num >> 16 & 255
    var g = num >> 8 & 255
    var b = num & 255

    return 'rgb(' + r + ', ' + g + ', ' + b + ', 0.5)'
  }

  return (
    <Box
      classes={[
        'card__footer'
      ]}
    >
      {
        language && language !== null &&
        <Box
          utilities={{
            d: { _: 'flex' },
            gap: { _: 2 },
            'align-items': { _: 'center' },
          }}
        >
          <Span
            classes='repo-language-color'
            style={{ backgroundColor: getRandomColor(language) }}
          />

          <Span>
            {language}
          </Span>
        </Box>
      }

      {
        <DynamicLink
          path={`${htmlURL}/stargazers`}
          classes={[
            'nav__link--extended'
          ]}
          utilities={{
            gap: { _: 2 }
          }}
        >
          <svg aria-label='star' role='img' height='16' viewBox='0 0 16 16' version='1.1' width='16' data-view-component='true' className='octicon octicon-star'>
            <path d='M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z'></path>
          </svg>

          {watchers && watchers !== 0 ? watchers : 0}
        </DynamicLink>
      }

      {
        <DynamicLink
          path={`${htmlURL}/forks`}
          classes={[
            'nav__link--extended'
          ]}
          utilities={{
            gap: { _: 2 }
          }}
        >
          <svg aria-label='fork' role='img' height='16' viewBox='0 0 16 16' version='1.1' width='16' data-view-component='true' className='octicon octicon-repo-forked'>
            <path d='M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z'></path>
          </svg>

          {forks && forks !== 0 ? forks : 0}
        </DynamicLink>
      }
    </Box>
  )
}

Footer.propTypes = {
  htmlURL: PropTypes.url,
  language: PropTypes.string,
  watchers: PropTypes.number,
  forks: PropTypes.number
}

export default Footer
