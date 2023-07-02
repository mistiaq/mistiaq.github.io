import classNames from 'classnames'

import {
  AnchorTag,
  Paragraph
} from '../../components/Typography'

import Container from '../Container'
import {
  Row,
  Column
} from '../Grid'

function Footer() {
  return (
    <footer
      className={classNames(
        'footer'
      )}
    >
      <Container>
        <Row>
          <Column
            col={{ _: 12, md: 6 }}
          >
            <Paragraph
              classes={[
                'footer__copyright-text'
              ]}
            >
              Copyright {new Date().getFullYear()} © Mohammad Istiaq Uddin
            </Paragraph>
          </Column>

          <Column
            col={{ _: 12, md: 6 }}
          >
            <Paragraph
              classes={[
                'footer__developer-text'
              ]}
            >
              Developed by {' '}

              <AnchorTag
                path='https://www.fiverr.com/mahim_farhad/be-your-front-end-web-developer'
                utilities={{
                  tc: { _: 'primary' }
                }}
              >
                Mahim Farhad
              </AnchorTag>
            </Paragraph>
          </Column>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
