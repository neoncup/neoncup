import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const container = document.getElementById('root')
render( <BrowserRouter> <App /> </BrowserRouter>, container )
