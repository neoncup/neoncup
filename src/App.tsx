import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import dark from './styles/theme/dark'
import light from './styles/theme/light'

import GlobalStyle from './styles/global'
import LoadEvents from './events/load/LoadEvents'
import ViewPort from './components/viewscreen/ViewPort'

function App() {
  const [ viewVisible, setViewVisible ] = useState(false)
  const openView = () => { setViewVisible(true); }
  
  const [theme, setTheme] = useState (dark)
  const switchTheme = () => {
    setTheme(theme.title == 'dark' ? light : dark)
  }

  return (
    <div className = "App" >
      <GlobalStyle />
      <LoadEvents seconds = {8} openView = { openView } />

      <ThemeProvider theme = {theme}>
        <ViewPort value = { viewVisible } switchTheme = {switchTheme} />
      </ThemeProvider>
    </div>
  )
}

export default App
