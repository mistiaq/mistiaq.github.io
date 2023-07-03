import React, {
  useState,
  useEffect
} from 'react'

import {
  Helmet
} from 'react-helmet-async'

import PropTypes from 'prop-types'

import {
  Heading
} from '../../components/Typography'
import Divider from '../../components/Divider'
import SkeletonLoading from '../../components/card/SkeletonLoading'

import Main from '../../layouts/Main'
import Container from '../../layouts/Container'
import Aside from '../../layouts/aside/Aside'
import Section from '../../layouts/Section'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'

function Repositories({
  setSidebarSlide
}) {
  const [githubData, setGithubData] = useState([])
  const [loading, setLoading] = useState([])
  const [githubUser, setGithubUser] = useState('mistiaq')

  useEffect(() => {
    setSidebarSlide(false)

    document.body.style.width = ''
    document.body.style.position = ''
    document.body.style.overflow = ''
  }, [setSidebarSlide])

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${githubUser}/repos`)

      const data = await response.json()

      setLoading(false)

      return setGithubData(data)
    }

    fetchData()
  }, [githubUser])

  return (
    <React.Fragment>
      <Helmet>
        <title>Repositories | Mohammad Istiaq Uddin</title>
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
                      Repositories
                    </Heading>
                  </Column>

                  <Column
                    col={{ _: 12 }}
                  >
                    <Row>
                      {
                        loading
                          ? <SkeletonLoading />
                          : (githubData && githubData.map((repo) => {
                            return (

                              <div
                                key={repo.id}
                                className='col-12 col-md-6 repo text-center mb-6'
                              >
                                <a
                                  href={`https://github.com/${githubUser}/${repo.name}`}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <img
                                    className='repo-img-light w-100'
                                    alt={`${githubUser / repo.name}`}
                                    src={`https://github-readme-stats.vercel.app/api/pin/?username=${githubUser}&repo=${repo.name}&theme=default&show_owner=false`}
                                  />
                                </a>
                              </div>
                            )
                          }))
                      }
                    </Row>
                  </Column>
                </Row>
              </Section>
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

Repositories.propTypes = {
  setSidebarSlide: PropTypes.func
}

export default Repositories
