import fetchQuery from '@utils/fetch'

import Main from '@components/layouts/Main'
import Container from '@components/layouts/Container'
import Grid from '@components/layouts/Grid'
import Section from '@components/layouts/Section'
import PDFReader from '@components/layouts/PDFReader'

async function Paper({
  params
}) {
  const data = await fetchQuery(`publications?populate=*&[filters][slug]=${params.slug}`)

  return (
    <>
      <Main>
        <Container>
          <Section
            className='py-16'
          >
            <Grid>
              {
                data && data.map((publication) => {
                  return (
                    <embed
                      src={publication.attributes.paper.data[0].attributes.url}
                      type='application/pdf'
                      width='100%'
                      height='900px'
                    />
                  )
                })
              }

              <PDFReader />
            </Grid>
          </Section>
        </Container>
      </Main>
    </>
  )
}

export default Paper
