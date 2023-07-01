import React, {
  useEffect
} from 'react'

import {
  Helmet
} from 'react-helmet-async'

import ReactMarkdown from 'react-markdown'

import {
  useParams
} from 'react-router-dom'

import PropTypes from 'prop-types'

import useFetch from '../../hooks/useFetch'

import {
  Heading,
  Span
} from '../../components/Typography'
import Divider from '../../components/Divider'

import Main from '../../layouts/Main'
import Container from '../../layouts/Container'
import Aside from '../../layouts/aside/Aside'
import Section from '../../layouts/Section'
import {
  Row,
  Column
} from '../../layouts/Grid'

function Article({
  setSidebarSlide
}) {
  const {
    slug
  } = useParams()

  const {
    data,
    loading
  } = useFetch(`articles/${slug}?populate=*`)

  useEffect(() => {
    setSidebarSlide(false)

    document.body.style.width = ''
    document.body.style.position = ''
    document.body.style.overflow = ''
  }, [setSidebarSlide])

  return (
    <React.Fragment>
      <Helmet>
        <title>
          {data && data.attributes.title}
        </title>
      </Helmet>

      <Main>
        <Container>
          <Row>
            <Column
              col={{ _: 12, md: 7, lg: 8, xl: 8 }}
            >
              <Section>
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
                        as='h1'
                        display
                      >
                        {data && data.attributes.title}
                      </Heading>
                  }

                  {
                    loading
                      ?
                      <div className='skeleton h-500px mt-6'></div>
                      :
                      <figure className='mb-7'>
                        <img src={data && 'http://localhost:1337' + data.attributes.featuredImage.data.attributes.url} alt={data && data.attributes.featuredImage.data.attributes.name} />
                      </figure>
                  }

                  {
                    loading
                      ?
                      <div className='skeleton mt-6'></div>
                      :
                      <div className='w-md-75 mx-md-auto'>
                        <ReactMarkdown>
                          {data && data.attributes.description}
                        </ReactMarkdown>
                      </div>
                  }
                </data>
              </Section>
            </Column>

            <Column
              col={{ md: 1 }}
              utilities={{
                text: { _: 'center' }
              }}
            >
              <Divider
                vertical
                utilities={{
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
    </React.Fragment >
  )
}

Article.propTypes = {
  setSidebarSlide: PropTypes.func
}

export default Article
