import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import DynamicLink from '../../components/DynamicLink'
import SkeletonLoading from '../../components/card/SkeletonLoading'

import Section from '../Section'

function PopulerPublications() {
  const {
    data,
    loading
  } = useFetch('articles')

  return (
    <Section
      utilities={{
        pt: { _: 6 }
      }}
    >
      <Heading
        as='h6'
        classes={[
          'section__title'
        ]}
        utilities={{
          mb: { _: 8 }
        }}
      >
        Populer Publications
      </Heading>

      <ul
        className="list"
      >
        {
          loading
            ? <SkeletonLoading />
            : (data && data.map((article, index) => {
              if (index < 5) {
                return (
                  <li
                    key={index}
                    className="list__item"
                  >
                    <DynamicLink
                      classes={[
                        'list__link'
                      ]}
                    >
                      {article.attributes.title}
                    </DynamicLink>
                  </li>
                )
              }
            }))
        }
      </ul>
    </Section>
  )
}

export default PopulerPublications
