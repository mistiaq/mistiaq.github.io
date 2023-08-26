import fetchQuery from '@utils/fetch'

import Divider from '@components/core/Divider'

import Main from '@components/layouts/Main'
import Container from '@components/layouts/Container'
import Grid from '@components/layouts/Grid'
import Section from '@components/layouts/Section'
import Flex from '@components/layouts/Flex'
import Card from '@components/layouts/Card'
import Aside from '@components/layouts/Aside'

async function Publications() {
  const data = await fetchQuery('publications?populate=*')

  return (
    <>
      <Main>
        <Container>
          <Grid
            className='grid lg:grid-cols-12'
          >
            <Section
              className='lg:col-span-8 py-16 lg:pr-0'
            >
              <Grid
                className='xl:grid-cols-1 gap-10'
              >
                {
                  data && data.map((publication) => {
                    return (
                      <Card
                        title={publication.attributes.title}
                        description={publication.attributes.description}
                        category={publication.attributes.category.data.attributes.name}
                        uploaded_at={publication.attributes.uploaded_at}
                        code={publication.attributes.code_link}
                        paper={publication.attributes.paper.data[0].attributes.url}
                      />
                    )
                  })
                }
              </Grid>
            </Section>

            <Flex
              justify='center'
            >
              <Divider
                className='lg:hidden'
              />

              <Divider
                vertical
                className='hidden lg:block'
              />
            </Flex>

            <Aside
              className='lg:col-span-3'
            />
          </Grid>
        </Container>
      </Main>
    </>
  )
}

export default Publications
