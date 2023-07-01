import Box from '../../layouts/Box'

import {
  AnchorTag,
  Small
} from '../../components/Typography'

function NavbarBrand() {
  return (
    <AnchorTag
      path='https://abdulazizmechanics.com'
      classes={[
        'navbar__brand'
      ]}
    >
      <Box
        classes={[
          'navbar__brand-text'
        ]}
      >
        Istiaq Uddin <br />
        <Small>Research & Writing</Small>
      </Box>
    </AnchorTag>
  )
}

export default NavbarBrand
