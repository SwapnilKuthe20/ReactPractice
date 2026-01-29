import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { user, UserContext } from './Context/UserContext.js'
import { settings, SettingsContext } from './Context/settingsContext.js'

// console.log(user, "...user");
// console.log(UserContext, "...userContext");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider value={user}>
      <SettingsContext.Provider value={settings}>

        <App />

      </SettingsContext.Provider>
    </UserContext.Provider>
  </StrictMode>,
)
