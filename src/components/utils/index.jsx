import Home from "../pages/Home/Home"
import Books from "../pages/Books/Books"
import Dissertation from "../pages/Dissertation/Dissertation"
import Jurnal from "../pages/Jurnal/Jurnal"
import Avtoreferat from "../pages/Avtoreferat/Avtoreferat"

export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    component: <Home/>,
    hidden: false 
  },
  {
    id: 2,
    title: 'Books',
    path: '/books',
    component: <Books/>,
    hidden: false 
  },
  {
    id: 3,
    title: 'Dissertation',
    path: '/dissertation',
    component: <Dissertation/>,
    hidden: false 
  },
  {
    id: 4,
    title: 'Jurnal',
    path: '/jurnal',
    component: <Jurnal/>,
    hidden: false 
  },
  {
    id: 5,
    title: 'Avtoreferat',
    path: '/avtoreferat',
    component: <Avtoreferat/>,
    hidden: false 
  }
]
