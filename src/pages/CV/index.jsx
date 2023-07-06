import React, {
  useEffect
} from 'react'

import PropTypes from 'prop-types'

import {
  Helmet
} from 'react-helmet-async'

import parser from 'html-react-parser'

import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import Divider from '../../components/Divider'
import SkeletonLoading from '../../components/card/SkeletonLoading'

import Main from '../../layouts/Main'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Aside from '../../layouts/aside/Aside'
import Section from '../../layouts/Section'

function CurriculumVitae({
  setSidebarSlide
}) {
  const {
    data,
    loading
  } = useFetch('cv')

  useEffect(() => {
    setSidebarSlide(false)

    document.body.style.width = ''
    document.body.style.position = ''
    document.body.style.overflow = ''
  }, [setSidebarSlide])

  return (
    <React.Fragment>
      <Helmet>
        <title>Curriculum Vitae | Mohammad Istiaq Uddin</title>
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
                      Curriculum Vitae
                    </Heading>
                  </Column>

                  <Column
                    col={{ _: 12 }}
                  >
                    {
                      loading
                        ? <SkeletonLoading />
                        : data && parser(data.attributes.CurriculumVitae)
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

CurriculumVitae.propTypes = {
  setSidebarSlide: PropTypes.func
}

export default CurriculumVitae
