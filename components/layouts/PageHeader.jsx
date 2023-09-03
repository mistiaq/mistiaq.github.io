import classNames from 'classnames'

import Typography from '@components/core/Typography'
import Divider from '@components/core/Divider'
import Button from '@components/core/Button'

import Container from '@components/layouts/Container'
import Grid from '@components/layouts/Grid'
import Box from '@components/layouts/Box'
import Flex from '@components/layouts/Flex'

function Info() {
  return (
    <Flex
      flex='col'
      items='start'
      justify='center'
      className='xl:row-span-2 md:col-span-2 xl:col-span-2 py-16 px-6 sm:px-16 xl:border-r-2 border-b-2 xl:border-b-0'
    >
      <Typography
        variant='h6'
        className='mb-6'
      >
        Trying to Bring Change <br />
        In The World
      </Typography>

      <Typography
        variant='h1'
        className='mb-2'
      >
        Mohammad
        Istiaq Uddin
      </Typography>

      <Typography
        variant='h3'
        className='mb-8'
      >
        Software Developer
      </Typography>

      <Typography
        variant='paragraph'
        className='md:w-3/4 mb-12'
      >
        I am currently a Postdoctoral Research Fellow in the Image,
        Informatics & Intelligence (i3) Research Lab at Harvard Medical School,
        Boston, Massachusetts. My research interests lie in machine/deep learning
        and its application to medical image analysis.
      </Typography>

      <Flex
        flex='wrap'
        gap={4}
      >
        <Button
          variant='toned'
          color='gray'
        >
          CV
        </Button>

        <Button
          color='black'
        >
          Download CV
        </Button>
      </Flex>
    </Flex>
  )
}

function Expertise({
  title,
  description,
  number,
  className
}) {
  return (
    <Box
      className={classNames(
        'py-16 px-6 sm:px-16 border-b-2 xl:border-b-0',
        className
      )}
    >
      <Typography
        variant='h3'
        className='mb-6'
      >
        {title}
      </Typography>

      <Typography
        variant='paragraph'
        className='md:w-3/4 xl:w-full mb-10'
      >
        {description}
      </Typography>

      <Divider
        className='my-4'
      />

      <Flex
        items='center'
        justify='between'
      >
        <Typography
          variant='h3'
        >
          {number}
        </Typography>

        <Button
          icon='arrow-up-right'
          size='sm'
          variant='toned'
          color='gray'
          pill
        />
      </Flex>
    </Box>
  )
}

function PageHeader() {
  return (
    <Box>
      <Container
        className='!px-0'
      >
        <Grid
          className='xl:grid-rows-2 md:grid-cols-2 xl:grid-cols-4'
        >
          <Info />

          <Expertise
            title='Publications'
            description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque, officia sint optio fugit unde eveniet!'}
            number={10}
            className='md:border-r-2'
          />

          <Expertise
            title='Repository'
            description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque, officia sint optio fugit unde eveniet!'}
            number={20}
          />

          <Expertise
            title='Blogs'
            description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque, officia sint optio fugit unde eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque, officia sint optio fugit unde eveniet!'}
            number={5}
            className='md:col-span-2 flex flex-col justify-center border-t-0 xl:border-t-2 !border-b-0'
          />
        </Grid>
      </Container>
    </Box>
  )
}

export default PageHeader
