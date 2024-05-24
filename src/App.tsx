import { useState } from 'react'

import GlobalStyle from './styles/global'
import LoadEvents from './events/load/LoadEvents'
import ViewPort from './components/viewscreen/ViewPort'

function App() {
  const [ viewVisible, setViewVisible ] = useState(false)
  const openView = () => { setViewVisible(true); }

  return (
    <div className = "App" >
      <GlobalStyle />
      <LoadEvents seconds = {8} openView = { openView } />
      <ViewPort value = { viewVisible } />
    </div>
  )
}

export default App
