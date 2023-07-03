import PropTypes from 'prop-types'

import classNames from 'classnames'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function Article({
  key,
  category,
  title,
  slug,
  description,
  paperURL,
  date
}) {
  return (
    <article
      key={key}
      className={classNames(
        'card'
      )}
    >
      <Header
        category={category}
        title={title}
        slug={slug}
        paperURL={paperURL}
        date={date}
      />

      <Body
        description={description}
      />

      <Footer
        category={category}
        paperURL={paperURL}
        date={date}
      />
    </article>
  )
}

Article.propTypes = {
  key: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string,
  // paperURL: PropTypes.url,
  date: PropTypes.string
}

export default Article
