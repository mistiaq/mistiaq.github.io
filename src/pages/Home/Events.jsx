import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import SkeletonLoading from '../../components/card/SkeletonLoading'
import Event from '../../components/card/event/Event'

import Section from '../../layouts/Section'
import {
  Row,
  Column
} from '../../layouts/Grid'

function Events() {
  const {
    data,
    loading
  } = useFetch('events')

  return (
    <Section
      utilities={{
        pb: { _: 0 }
      }}
    >
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
            Events
          </Heading>
        </Column>

        <Column
          col={{ _: 12 }}
        >
          {
            loading
              ? <SkeletonLoading />
              : (data && data.map((event) => {
                return (
                  <Event
                    key={event.id}
                    news={event.attributes.news}
                    date={event.attributes.date}
                  />
                )
              }))
          }
        </Column>
      </Row>
    </Section>
  )
}

export default Events
