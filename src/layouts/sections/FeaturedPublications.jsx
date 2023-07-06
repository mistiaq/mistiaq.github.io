import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import SkeletonLoading from '../../components/card/SkeletonLoading'
import Publication from '../../components/card/publication/Publication'

import Section from '../Section'
import {
  Row,
  Column
} from '../Grid'

function FeaturedPublications() {
  const {
    data,
    loading
  } = useFetch('publications?populate=*')

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
                  <Publication
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

export default FeaturedPublications
