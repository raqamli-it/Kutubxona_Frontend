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
    hidden: true 
  },
  {
    id: 2,
    title: 'Adabiyotlar',
    path: '/adabiyot',
    component: <Books/>,
    hidden: false 
  },
  {
    id: 3,
    title: ' Jurnallar',
    path: '/jurnallar',
    component: <Jurnal/>,
    hidden: false 
  },
  {
    id: 4,
    title: 'Dissertatsiyalar',
    path: '/dissertatsiyalar',
    component: <Dissertation/>,
    hidden: false 
  },
  {
    id: 5,
    title: ' Avtoreferatlar',
    path: '/avtoreferatlar',
    component: <Avtoreferat/>,
    hidden: false 
  }
]
