import React, {
  useEffect
} from 'react'

import {
  Helmet
} from 'react-helmet-async'

import PropTypes from 'prop-types'

import {
  motion
} from 'framer-motion'

import PageBanner from './PageBanner'

import Main from '../../layouts/Main'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Section from '../../layouts/Section'
import Box from '../../layouts/Box'

import {
  Heading
} from '../../components/Typography'
import Image from '../../components/Image'
import DynamicLink from '../../components/DynamicLink'
import Button from '../../components/Button'

import mail from '../../assets/images/icons/mail.png'
import mapLocation from '../../assets/images/icons/map-location.png'
import support from '../../assets/images/icons/support.png'

function Contact({
  setNavbarSlide
}) {
  useEffect(() => {
    setNavbarSlide(false)

    document.body.style.width = ''
    document.body.style.position = ''
    document.body.style.overflow = ''
  }, [setNavbarSlide])

  return (
    <React.Fragment>
      <Helmet>
        <title>Car Repair and Services | Contact Us</title>
      </Helmet>

      <PageBanner />

      <Main>
        <Section>
          <Container>
            <Row
              utilities={{
                'align-items': { md: 'center' },
                'row-gap': { _: 8 }
              }}
            >
              <Column
                col={{ _: 12, md: 6 }}
              >
                <Box>
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -40
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          default: {
                            ease: 'linear',
                            duration: 0.5,
                            delay: 0.2
                          }
                        }
                      }
                    }}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                      once: true
                    }}
                  >
                    <Heading
                      as='h5'
                      utilities={{
                        mb: { _: 8 }
                      }}
                    >
                      We&#39;re open for any suggestion or just to have a chat
                    </Heading>
                  </motion.div>

                  <form>
                    <Row>
                      <Column
                        col={{ _: 12 }}
                      >
                        <fieldset>
                          <Box
                            classes={[
                              'form-group'
                            ]}
                            utilities={{
                              mb: { _: 6 }
                            }}
                          >
                            <Box
                              classes={[
                                'input-group',
                                'input-group--lg'
                              ]}
                            >
                              <input
                                type='text'
                                name='name'
                                className='input-group__control'
                                placeholder='Name'
                                required
                              />
                            </Box>
                          </Box>
                        </fieldset>
                      </Column>

                      <Column col={{ _: 12, lg: 6 }}>
                        <fieldset>
                          <Box
                            classes={[
                              'form-group'
                            ]}
                            utilities={{
                              mb: { _: 6 }
                            }}
                          >
                            <Box
                              classes={[
                                'input-group',
                                'input-group--lg'
                              ]}
                            >
                              <input
                                type='tel'
                                name='number'
                                className='input-group__control'
                                placeholder='Phone'
                                required
                              />
                            </Box>
                          </Box>
                        </fieldset>
                      </Column>

                      <Column col={{ _: 12, lg: 6 }}>
                        <fieldset>
                          <Box
                            classes={[
                              'form-group'
                            ]}
                            utilities={{
                              mb: { _: 6 }
                            }}
                          >
                            <Box
                              classes={[
                                'input-group',
                                'input-group--lg'
                              ]}
                            >
                              <input
                                type='email'
                                name='number'
                                className='input-group__control'
                                placeholder='Email'
                                required
                              />
                            </Box>
                          </Box>
                        </fieldset>
                      </Column>

                      <Column col={{ _: 12 }}>
                        <fieldset>
                          <Box
                            classes={[
                              'form-group'
                            ]}
                            utilities={{
                              mb: { _: 6 }
                            }}
                          >
                            <Box
                              classes={[
                                'input-group',
                                'input-group--lg'
                              ]}
                            >
                              <textarea
                                name='message'
                                cols='20' rows='10'
                                className='input-group__control h-auto'
                                placeholder='Message'
                                required
                              />
                            </Box>
                          </Box>
                        </fieldset>
                      </Column>

                      <Column
                        col={{ _: 12 }}
                      >
                        <Button
                          type='submit'
                          size='lg'
                          utilities={{
                            mb: { _: 0 },
                            tc: { _: 'light' }
                          }}
                        >
                          Send Message
                        </Button>
                      </Column>
                    </Row>
                  </form>
                </Box>
              </Column>

              <Column
                col={{ _: 12, md: 5 }}
                utilities={{
                  ml: { _: 'auto' }
                }}
              >
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: 0.4
                      }
                    }
                  }}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{
                    once: true
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -40,
                        transition: {
                          y: {
                            stiffness: 1000,
                            velocity: -100
                          }
                        }
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          y: {
                            stiffness: 1000
                          }
                        }
                      }
                    }}
                    className='d-flex gap-4 align-items-center mb-6'
                  >
                    <Image
                      src={mapLocation}
                      alt='map location'
                    />

                    <Box>
                      <Heading
                        as='h5'
                        utilities={{
                          mt: { _: 'n1' },
                          mb: { _: 0 }
                        }}
                      >
                        Find Us At
                      </Heading>

                      <DynamicLink
                        path='https://www.google.com/maps?ll=25.23131,55.27682&z=16&t=m&hl=bn&gl=BD&mapclient=embed&cid=6134596970271519063'
                        utilities={{
                          mb: { _: 0 },
                          fs: { _: 'lg' },
                          tc: { _: 'dark' },
                          opacity: { _: 7 }
                        }}
                      >
                        Big Mosque, Al Satwa <br />
                        Dubai, UAE
                      </DynamicLink>
                    </Box>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -40,
                        transition: {
                          y: {
                            stiffness: 1000,
                            velocity: -100
                          }
                        }
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          y: {
                            stiffness: 1000
                          }
                        }
                      }
                    }}
                    className='d-flex gap-4 align-items-center mb-6'
                  >
                    <Image
                      src={mail}
                      alt='mail'
                    />

                    <Box>
                      <Heading
                        as='h5'
                        utilities={{
                          mt: { _: 'n1' },
                          mb: { _: 0 }
                        }}
                      >
                        Email us at
                      </Heading>

                      <DynamicLink
                        path='mailto:mdnohadabbacy@gmail.com'
                        utilities={{
                          mb: { _: 0 },
                          fs: { _: 'lg' },
                          tc: { _: 'dark' },
                          opacity: { _: 7 }
                        }}
                      >
                        mdnohadabbacy@gmail.com
                      </DynamicLink>
                    </Box>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -40,
                        transition: {
                          y: {
                            stiffness: 1000,
                            velocity: -100
                          }
                        }
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          y: {
                            stiffness: 1000
                          }
                        }
                      }
                    }}
                    className='d-flex gap-4 align-items-center'
                  >
                    <Image
                      src={support}
                      alt='support'
                    />

                    <Box>
                      <Heading
                        as='h5'
                        utilities={{
                          mt: { _: 'n1' },
                          mb: { _: 0 }
                        }}
                      >
                        Call us at
                      </Heading>

                      <DynamicLink
                        path='tel:+971547619732'
                        utilities={{
                          mb: { _: 0 },
                          fs: { _: 'lg' },
                          tc: { _: 'dark' },
                          opacity: { _: 7 }
                        }}
                      >
                        +971 54 761 9732
                      </DynamicLink>
                    </Box>
                  </motion.div>
                </motion.div>
              </Column>
            </Row>
          </Container>
        </Section>
      </Main>
    </React.Fragment>
  )
}

Contact.propTypes = {
  setNavbarSlide: PropTypes.func
}

export default Contact
