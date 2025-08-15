import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { theme_toggle } from './features/themeSlice'

const coomonStyle = {
  width: "100%",
  height: "100vh"
}
const darkTheme = {
  backgroundColor: "black",
  color: "white"
}

const lightTheme = {
  backgroundColor: "white",
  color: "black"
}


function App() {
  // const [isDark, setIsDark] = useState(true)

  const isDark = useSelector(state => state.theme.darkTheme)
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(theme_toggle())
  }

  return (
    <div style={{ ...coomonStyle, ...(isDark ? darkTheme : lightTheme) }}>

      <label htmlFor="theme"> Dark Theme </label>
      <input type="checkbox" id='theme' checked={isDark} onChange={handleChange} style={{ margin: "20px" }} />

      <p style={{ margin: "20px" }}>Lorem ipsum dolor sit, amet consectetur provident vitae sequi quam ullam enim quae ab quibusdam.</p>
      <p style={{ margin: "20px" }}>Lorem ipsum dolor sit, amet consectetur provident vitae sequi quam ullam enim quae ab quibusdam.</p>
      <p style={{ margin: "20px" }}>Lorem ipsum dolor sit, amet consectetur provident vitae sequi quam ullam enim quae ab quibusdam.</p>

    </div >
  )
}

export default App
