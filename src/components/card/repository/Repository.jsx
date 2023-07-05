import PropTypes from 'prop-types'

import Box from '../../../layouts/Box'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function Repository({
  key,
  htmlURL,
  name,
  visibility,
  description,
  language,
  forks,
  watchers
}) {
  return (
    <Box
      key={key}
      classes={[
        'card',
        'card--repository',
      ]}
    >
      <Header
        htmlURL={htmlURL}
        name={name}
        visibility={visibility}
      />

      {
        description != null &&
        <Body
          description={description}
        />
      }

      <Footer
        htmlURL={htmlURL}
        language={language}
        watchers={watchers}
        forks={forks}
      />
    </Box>
  )
}

Repository.propTypes = {
  key: PropTypes.string,
  htmlURL: PropTypes.url,
  name: PropTypes.string,
  visibility: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  watchers: PropTypes.number,
  forks: PropTypes.number
}

export default Repository
