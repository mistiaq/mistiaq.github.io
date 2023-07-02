import {
  useState
} from 'react'

import {
  Routes,
  Route
} from 'react-router-dom'

import {
  HelmetProvider
} from 'react-helmet-async'

import './assets/styles/styles.css'

import Divider from './components/Divider'

import Header from './layouts/header/Header'
import Sidebar from './layouts/sidebar/Sidebar'
import Footer from './layouts/footer/Footer'

import Home from './pages/Home'
import Publications from './pages/Publications'
import Repositories from './pages/Repositories'

import Error404 from './pages/Error'

function App() {
  const [sidebarSlide, setSidebarSlide] = useState(false)

  const helmetContext = {}

  return (
    <HelmetProvider
      context={helmetContext}
    >
      <Header
        sidebarSlide={sidebarSlide}
        setSidebarSlide={setSidebarSlide}
      />

      <Divider />

      <Sidebar
        sidebarSlide={sidebarSlide}
        setSidebarSlide={setSidebarSlide}
      />

      <Routes>
        <Route
          path='/'
          element={
            <Home
              setSidebarSlide={setSidebarSlide}
            />
          }
        />

        <Route
          path='/about'
          element={
            <Home
              setSidebarSlide={setSidebarSlide}
            />
          }
        />

        <Route
          exact
          path='/publications'
          element={
            <Publications
              setSidebarSlide={setSidebarSlide}
            />
          }
        />

        <Route
          exact
          path='/repositories'
          element={
            <Repositories
              setSidebarSlide={setSidebarSlide}
            />
          }
        />

        <Route
          path='*'
          element={
            <Error404 />
          }
        />
      </Routes>

      <Divider />

      <Footer />
    </HelmetProvider>
  )
}

export default App
