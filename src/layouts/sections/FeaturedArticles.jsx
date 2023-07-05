import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import SkeletonLoading from '../../components/card/SkeletonLoading'
import Article from '../../components/card/article/Article'

import Section from '../Section'
import {
  Row,
  Column
} from '../Grid'

function FeaturedArticles() {
  const {
    data,
    loading
  } = useFetch('articles?populate=*')

  return (
    <Section>
      <Row
        utilities={{
          'row-gap': { _: 8 }
        }}
      >
        <Column
          col={{ _: 12 }}
        >
          <Heading
            as='h6'
            classes={[
              'section__title'
            ]}
          >
            Featured Publications
          </Heading>
        </Column>

        <Column
          col={{ _: 12 }}
        >
          {
            loading
              ? <SkeletonLoading />
              : (data && data.map((article) => {
                return (
                  <Article
                    key={article.id}
                    title={article.attributes.title}
                    slug={article.attributes.slug}
                    description={article.attributes.description}
                    category={article.attributes.category.data.attributes.categoryName}
                    paperURL={article.attributes.paper.data.attributes.url}
                    date={article.attributes.uploadedAt}
                  />
                )
              }))
          }
        </Column>
      </Row>
    </Section>
  )
}

export default FeaturedArticles
