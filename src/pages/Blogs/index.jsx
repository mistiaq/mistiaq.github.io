import React, {
  useEffect
} from 'react'

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
import ArticleCard from '../../components/card/article/ArticleCard'

import Main from '../../layouts/Main'
import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Aside from '../../layouts/aside/Aside'

function Blogs({
  setSidebarSlide
}) {
  useEffect(() => {
    setSidebarSlide(false)

    document.body.style.width = ''
    document.body.style.position = ''
    document.body.style.overflow = ''
  }, [setSidebarSlide])

  const {
    data,
    loading
  } = useFetch('articles?populate=*')

  return (
    <React.Fragment>
      <Helmet>
        <title>Articles | Mohammad Istiaq Uddin</title>
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
                      Articles
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
                            <ArticleCard
                              key={article.id}
                              title={article.attributes.title}
                              slug={article.attributes.slug}
                              description={article.attributes.description}
                              thumbnail={article.attributes.thumbnail.data.attributes.url}
                              uploadedAt={article.attributes.uploadedAt}
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

Blogs.propTypes = {
  setSidebarSlide: PropTypes.func
}

export default Blogs
