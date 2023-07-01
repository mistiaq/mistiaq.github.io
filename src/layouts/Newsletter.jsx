import {
  Paragraph
} from '../components/Typography'
import Button from '../components/Button'

import Container from './Container'
import {
  Row,
  Column
} from './Grid'
import Section from './Section'
import Box from './Box'

function Newsletter() {
  return (
    <Section
      classes={[
        'section--cta'
      ]}
    >
      <Container>
        <Row>
          <Column
            col={{ _: 12, md: 6, lg: 4 }}
            utilities={{
              mx: { _: 'auto' }
            }}
          >
            <Paragraph
              utilities={{
                fw: { _: 'bold' }
              }}
            >
              Don&apos;t miss out on the latest issues.
              Sign up now to get access to the library of members-only issues.
            </Paragraph>

            <Box
              classes={['form-group']}
            >
              <Box
                classes={[
                  'input-group',
                  'input-group--newsletter'
                ]}
                utilities={{
                  mb: { _: 0 }
                }}
              >
                <input
                  type='email'
                  name='newsletter'
                  className='input-group__control'
                  placeholder='example@mail.com'
                />

                <Button
                  variant='text'
                  utilities={{
                    mb: { _: 0 }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default Newsletter