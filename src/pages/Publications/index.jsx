import React, {
  useEffect
} from 'react'

import PropTypes from 'prop-types'

import {
  Helmet
} from 'react-helmet-async'

import Divider from '../../components/Divider'

import Main from '../../layouts/Main'
import Container from '../../layouts/Container'
import Aside from '../../layouts/aside/Aside'
import {
  Row,
  Column
} from '../../layouts/Grid'

import FeaturedArticles from '../Home/FeaturedArticles'

function Publications({
  setSidebarSlide
}) {
  useEffect(() => {
    setSidebarSlide(false)

    document.body.style.width = ''
    document.body.style.position = ''
    document.body.style.overflow = ''
  }, [setSidebarSlide])

  return (
    <React.Fragment>
      <Helmet>
        <title>Personal Portfolio | Mohammad Istiaq Uddin</title>
      </Helmet>

      <Main>
        <Container>
          <Row>
            <Column
              col={{ _: 12, md: 7, lg: 8, xl: 8 }}
            >
              <FeaturedArticles />
            </Column>

            <Column
              col={{ md: 1 }}
              utilities={{
                d: { _: 'none', md: 'block' },
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
    </React.Fragment>
  )
}

Publications.propTypes = {
  setSidebarSlide: PropTypes.func
}

export default Publications
