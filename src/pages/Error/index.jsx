import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import {
  Heading,
  Paragraph
} from '../../components/Typography'
import DynamicLink from '../../components/DynamicLink'

import Container from '../../layouts/Container'
import Main from '../../layouts/Main'
import Section from '../../layouts/Section'
import {
  Row,
  Column
} from '../../layouts/Grid'

function Error404() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Istiaq Uddin | 404 Not Found</title>
      </Helmet>

      <Main>
        <Section
          classes={['section--full-page']}
        >
          <Container>
            <Row>
              <Column
                col={{ _: 12 }}
              >
                <center>
                  <Heading
                    as='h1'
                    display
                    utilities={{
                      mb: { _: 4 }
                    }}
                  >
                    404
                  </Heading>

                  <Heading
                    as='h4'
                    utilities={{
                      mb: { _: 4 }
                    }}
                  >
                    Page Not found!
                  </Heading>

                  <Paragraph
                    utilities={{
                      mb: { _: 8 }
                    }}
                  >
                    Either something went wrong or this page does not exist anymore.
                  </Paragraph>

                  <DynamicLink
                    to='/home'
                    className='btn btn--lg btn--fill-primary btn--link'
                  >
                    Go to home page
                  </DynamicLink>
                </center>
              </Column>
            </Row>
          </Container>
        </Section>
      </Main>
    </React.Fragment>
  )
}

export default Error404
