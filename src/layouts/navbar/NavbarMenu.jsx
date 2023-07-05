import Icon from '../../components/Icon'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'
import Button from '../../components/Button'

const links = [
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'CV',
    path: '/cv'
  },
  {
    name: 'Publications',
    path: '/publications'
  },
  {
    name: 'Repositories',
    path: '/repositories'
  },
  {
    name: 'Blogs',
    path: '/blogs'
  }
]

function NavbarMenu() {
  return (
    <Nav
      classes={[
        'navbar__menu'
      ]}
    >
      {
        links.map(({
          name,
          path
        }) => (
          <NavLink
            key={name}
            path={path}
            utilities={{
              pr: { _: 0 }
            }}
          >
            {name}
          </NavLink>
        ))
      }

      <Button
        // onClick={() => {}}
        size='sm'
        variant='text'
        color='dark'
        iconOnly
        utilities={{
          ml: { _: 3 },
          text: { _: 'end' }
        }}
      >
        <Icon
          name='dark'
        />
      </Button>
    </Nav>
  )
}

export default NavbarMenu
