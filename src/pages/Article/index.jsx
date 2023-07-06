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

import parser from 'html-react-parser'

import useFetch from '../../hooks/useFetch'

import {
  Heading, Span
} from '../../components/Typography'
import Divider from '../../components/Divider'
import SkeletonLoading from '../../components/card/SkeletonLoading'

import Main from '../../layouts/Main'
import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Aside from '../../layouts/aside/Aside'

function Article({
  setSidebarSlide
}) {
  const {
    slug
  } = useParams()

  const {
    data,
    loading
  } = useFetch(`articles?populate=*&[filters][slug]=${slug}`)

  useEffect(() => {
    setSidebarSlide(false)

    document.body.style.width = ''
    document.body.style.position = ''
    document.body.style.overflow = ''
  }, [setSidebarSlide])

  { console.log(data) }

  return (
    <React.Fragment>
      <Helmet>
        <title>{slug.toUpperCase()} | Mohammad Istiaq Uddin</title>
      </Helmet>

      <Main>
        <Container>
          <Row>
            <Column
              col={{ _: 12, lg: 8 }}
              utilities={{
                mx: { _: 'auto' }
              }}
            >
              {
                loading
                  ? <SkeletonLoading />
                  : (data && data.map((article) => {
                    return (
                      <Section
                        key={article.id}
                      >
                        <data>
                          <Span>
                            <a href='/'>Speeches</a>
                            —
                            <time dateTime='2021-06-28'>Jun 28, 2021</time>
                          </Span>

                          {
                            loading
                              ?
                              <div className='skeleton mt-3 mb-6'></div>
                              :

                              <Heading
                                as='h3'
                                display
                              >
                                {article && article.attributes.title}
                              </Heading>
                          }

                          {
                            loading
                              ?
                              <div className='skeleton h-500px mt-6'></div>
                              :
                              <figure className='mb-7'>
                                <img src={article && ('https://strapi-development-tb5n.onrender.com' + article.attributes.thumbnail.data.attributes.url)} alt={article && article.attributes.thumbnail.data.attributes.name} />
                              </figure>
                          }

                          {
                            loading
                              ?
                              <div className='skeleton mt-6'></div>
                              :
                              <div>
                                {article && parser(article.attributes.description)}
                              </div>
                          }
                        </data>
                      </Section>
                    )
                  }))
              }
            </Column>
          </Row>
        </Container>
      </Main>
    </React.Fragment >
  )
}

Article.propTypes = {
  setSidebarSlide: PropTypes.func
}

export default Article
