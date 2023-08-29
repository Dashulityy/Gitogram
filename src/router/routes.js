import { stories } from '../pages/stories'
import { feeds } from '../pages/feeds'

export default [
  {
    path: '/',
    component: feeds,
    name: feeds
  },
  {
    path: '/stories/:id',
    component: stories,
    name: stories
  }
]
