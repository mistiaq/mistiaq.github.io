import PropTypes from 'prop-types'

import classNames from 'classnames'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function Article({
  key,
  title,
  slug,
  description,
  category,
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
  title: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  // paperURL: PropTypes.func,
  date: PropTypes.string
}

export default Article
