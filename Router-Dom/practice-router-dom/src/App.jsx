import { Route, Routes } from 'react-router-dom'
import './App.css'
import { SidebarRoutes } from './Components/Routes/SidebarRoutes'
import NotFound from './Components/NotFound'
import Sidebar from './Components/Sidebar'
import { ProfileRoutes } from './Components/Routes/ProfileRoutes'
import SidebarRouting from './Components/Routing/SidebarRouting'
import ProfileRouting from './Components/Routing/ProfileRouting'

function App() {

  return (
    <>
      <Routes>
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<SidebarRouting />} >
          {
            SidebarRoutes.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))
          }
          <Route path='/profile' element={<ProfileRouting />}>
            {
              ProfileRoutes.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
              ))
            }
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
