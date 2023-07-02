import {
  Heading,
  Span
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Divider from '../../components/Divider'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'

const links = [
  {
    id: 1,
    name: 'CV',
    path: '/cv'
  },
  {
    id: 2,
    name: 'Publications',
    path: '/publications'
  },
  {
    id: 3,
    name: 'Projects',
    path: '/projects'
  },
  {
    id: 4,
    name: 'Repositories',
    path: '/repositories'
  }
]

const socialLinks = [
  {
    id: 1,
    name: 'facebook',
    icon: 'facebook',
    path: 'https://facebook.com'
  },
  {
    id: 2,
    name: 'twitter',
    icon: 'twitter',
    path: 'https://twitter.com'
  },
  {
    id: 3,
    name: 'linked in',
    icon: 'linked-in',
    path: 'https://www.linkedin.com'
  },
  {
    id: 4,
    name: 'github',
    icon: 'github',
    path: 'https://www.github.com'
  }
]

function SidebarMenu() {
  return (
    <Nav
      classes={[
        'sidebar__menu'
      ]}
    >
      <li>
        <Heading
          as='h6'
        >
          Menu
        </Heading>
      </li>

      {
        links.map(({
          id,
          name,
          path
        }) => (
          <NavLink
            key={id}
            path={path}
            extended
          >
            <Span>
              {name[0]}
            </Span>

            {name}
          </NavLink>
        ))
      }

      <Divider
        utilities={{
          w: { _: 100 },
          my: { _: 6 }
        }}
      />

      <li>
        <Heading
          as='h6'
          utilities={{
            mt: { _: 3 }
          }}
        >
          Social Media
        </Heading>
      </li>

      {
        socialLinks.map(({
          id,
          name,
          icon,
          path
        }) => (
          <NavLink
            key={id}
            path={path}
            extended
          >
            <Icon
              name={icon}
              classes={[
                'nav__icon'
              ]}
            />

            {name}
          </NavLink>
        ))
      }
    </Nav>
  )
}

export default SidebarMenu
