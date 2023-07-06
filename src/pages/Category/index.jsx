import React, {
  useEffect
} from 'react'

import {
  useParams
} from 'react-router-dom'

import PropTypes from 'prop-types'

import {
  Helmet
} from 'react-helmet-async'

import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import Divider from '../../components/Divider'
import SkeletonLoading from '../../components/card/SkeletonLoading'
import Publication from '../../components/card/publication/Publication'

import Main from '../../layouts/Main'
import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Aside from '../../layouts/aside/Aside'

function Category({
  setSidebarSlide
}) {
  const {
    categoryName
  } = useParams()

  const {
    data,
    loading
  } = useFetch(`publications?populate=*&[filters][category][categoryName]=${categoryName}`)

  useEffect(() => {
    setSidebarSlide(false)

    document.body.style.width = ''
    document.body.style.position = ''
    document.body.style.overflow = ''
  }, [setSidebarSlide])

  return (
    <React.Fragment>
      <Helmet>
        <title>{categoryName.toUpperCase()} | Mohammad Istiaq Uddin</title>
      </Helmet>

      <Main>
        <Container>
          <Row>
            <Column
              col={{ _: 12, md: 7, lg: 8, xl: 8 }}
            >
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
                        : (data && data.map((publication) => {
                          return (
                            <Publication
                              key={publication.id}
                              title={publication.attributes.title}
                              slug={publication.attributes.slug}
                              description={publication.attributes.description}
                              category={publication.attributes.category.data.attributes.categoryName}
                              paperURL={publication.attributes.paper.data.attributes.url}
                              date={publication.attributes.uploadedAt}
                            />
                          )
                        }))
                    }
                  </Column>
                </Row>
              </Section>
            </Column>

            <Column
              col={{ md: 1 }}
              utilities={{
                text: { _: 'center' }
              }}
            >
              <Divider
                utilities={{
                  d: { _: 'inline-block', md: 'none' },
                  w: { _: 100 }
                }}
              />

              <Divider
                vertical
                utilities={{
                  d: { _: 'none', md: 'inline-block' },
                  h: { _: 100 }
                }}
              />
            </Column>

            <Column
              col={{ _: 12, md: 4, lg: 3, xl: 3 }}
            >
              <Aside />
            </Column>
          </Row>
        </Container>
      </Main>
    </React.Fragment>
  )
}

Category.propTypes = {
  setSidebarSlide: PropTypes.func
}

export default Category
