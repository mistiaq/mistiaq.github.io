import parser from 'html-react-parser'

import useFetch from '../../hooks/useFetch'

import Section from '../../layouts/Section'
import {
  Row,
  Column
} from '../../layouts/Grid'

function Info() {
  const {
    data,
    loading
  } = useFetch('about')

  return (
    <Section>
      <Row>
        <Column
          col={{ _: 12 }}
        >
          {
            data && parser(data.attributes.description, {
              replace: node => {
                if (node.type === 'tag' && node.name === 'img') {
                  const { src, alt } = node.attribs

                  return <img
                    src={src}
                    // src={'http://localhost:1337' + src}
                    alt={alt}
                  />
                }
              }
            })
          }
        </Column>
      </Row>
    </Section>
  )
}

export default Info
