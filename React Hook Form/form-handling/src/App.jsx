import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import ReactHookForm from './Components/ReactHookForm'
import CstmReactHookForm from './Components/CstmReactHookForm'
import Dashboard from './Routing/Dashboard'
import ZodForm from './Components/ZodForm'
import SignUpZod from './Components/SignUpZod'
import LoginZod from './Components/LoginZod'
import EditFormZod from './Components/ZodProjects/EditFormZod'
import ZodProjectDash from './Routing/ZodProjectDash'
import Profile from './Components/ZodProjects/Profile'
import UpdateProfile from './Components/ZodProjects/UpdateProfile'

function App() {

  const navLinks = [
    // { id: 1, index, component: <Home /> },
    { id: 2, path: "/custom", component: <CstmReactHookForm /> },
    { id: 3, path: "/reacthook", component: <ReactHookForm /> },
    { id: 4, path: "/zod", component: <ZodForm /> },
    { id: 5, path: "/signup", component: <SignUpZod /> },
    { id: 6, path: "/login", component: <LoginZod /> },
  ]

  const zodProjectLinks = [
    { id: 1, path: "editProfile", component: <EditFormZod /> },
    { id: 2, path: "updateProfile", component: <UpdateProfile /> },
  ]

  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />} />
          {
            navLinks.map(({ id, index, path, component }) => (
              <Route key={id} path={path} element={component} />
            ))
          }

          <Route path='profile' element={<ZodProjectDash />}>
            <Route index element={<Profile />} />
            {
              zodProjectLinks.map(({ id, path, component }) => (
                <Route key={id} path={path} element={component} />
              ))
            }

          </Route>
        </Route>
      </Routes>

    </div >
  )
}

export default App
