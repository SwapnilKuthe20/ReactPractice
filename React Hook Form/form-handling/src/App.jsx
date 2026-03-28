import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import ReactHookForm from './Components/ReactHookForm'
import CstmReactHookForm from './Components/CstmReactHookForm'
import Dashboard from './Routing/Dashboard'

function App() {

  const navLinks = [
    // { id: 1, index, component: <Home /> },
    { id: 2, path: "/custom", component: <CstmReactHookForm /> },
    { id: 3, path: "/reacthook", component: <ReactHookForm /> },
  ]

  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />} />
          {
            navLinks.map(({ id, index, path, component }) => (
              <Route key={id} index={index} path={path} element={component} />
            ))
          }
        </Route>
      </Routes>

    </div >
  )
}

export default App
