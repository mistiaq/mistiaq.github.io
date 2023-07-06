import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import Badge from '../../components/Badge'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'
import SkeletonLoading from '../../components/card/SkeletonLoading'

import Section from '../Section'

function Categories() {
  const {
    data,
    loading
  } = useFetch('categories')

  return (
    <Section
      utilities={{
        py: { _: 6 }
      }}
    >
      <Heading
        as='h6'
        classes={[
          'section__title'
        ]}
        utilities={{
          mb: { _: 8 }
        }}
      >
        Populer Tags
      </Heading>

      <Nav
        utilities={{
          gap: { _: 4 }
        }}
      >
        {
          loading
            ? <SkeletonLoading />
            : (data && data.map((category) => {
              return (
                <NavLink
                  key={category.id}
                  path={`/categories/${category.attributes.categoryName}`}
                  extended
                  utilities={{
                    p: { _: 0 }
                  }}
                >
                  <Badge
                    variant='outline'
                    color='dark'
                  >
                    {category.attributes.categoryName}
                  </Badge>
                </NavLink>
              )
            }))
        }
      </Nav>
    </Section>
  )
}

export default Categories
