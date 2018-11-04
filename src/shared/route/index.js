import AppRoot from '../components/App'
import Home from '../components/Home'
import About from '../components/About'
import Page404 from '../components/Page404'

const routes = [
  {
    component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/about',
        component: About
      },
      {
        path: '*',
        component: Page404
      }
    ]
  }
]

export default routes
