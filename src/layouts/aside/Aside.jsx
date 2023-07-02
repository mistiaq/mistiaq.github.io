import classNames from 'classnames'

import About from './About'
import Categories from './Categories'
import PopulerPublications from './Publications'

function Aside() {
  return (
    <aside
      className={classNames(
        'aside'
      )}
    >
      <About />

      <Categories />

      <PopulerPublications />
    </aside>
  )
}

export default Aside
