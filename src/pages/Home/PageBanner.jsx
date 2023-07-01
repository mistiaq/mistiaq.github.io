import {
  Heading
} from '../../components/Typography'

import Container from '../../layouts/Container'
import Box from '../../layouts/Box'

function PageBanner() {
  return (
    <Box
      classes={[
        'banner'
      ]}
    >
      <Container>
        <Box>
          {/* <MotionDiv
            variants={{
              hidden: {
                opacity: 0,
                y: -30,
              },
              visible: {
                opacity: 1,
                y: 0,
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
              as='h1'
              display
              classes={[
                'banner__title'
              ]}
              utilities={{
                w: { md: 75, lg: 50 },
                tc: { _: 'light' }
              }}
            >
              Gallery
            </Heading>
          </MotionDiv> */}

          {/* <MotionDiv
            variants={{
              hidden: {
                opacity: 0,
                transform: 'scaleY(0)',
                transformOrigin: 'bottom',
              },
              visible: {
                opacity: 1,
                transform: 'scaleY(1)',
                transition: {
                  default: {
                    ease: 'linear',
                    duration: 0.5,
                    delay: 0.4
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
            <ul
              className="breadcrumb"
            >
              <li
                className='breadcrumb__item pl-1'
              >
                <a
                  href="/home"
                  className='breadcrumb__link'
                >
                  Home
                </a>
              </li>

              <li
                className='breadcrumb__item'
              >
                <a
                  className='breadcrumb__link tc-light'
                >
                  Gallery
                </a>
              </li>
            </ul>
          </MotionDiv> */}
        </Box>
      </Container>

      <Heading
        as='h1'
        classes={[
          'banner__hidden-title'
        ]}
        utilities={{
          mb: { _: 0 }
        }}
      >
        Car Repairing
      </Heading>

      <Box
        classes={[
          'banner__bg'
        ]}
        style={{
          backgroundImage: `url(${'http://html.tonatheme.com/2020/Autorex/assets/images/background/bg-3.jpg'})`
        }}
      />
    </Box>
  )
}

export default PageBanner
