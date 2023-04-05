import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import ProductsList from './routes/productsList'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route path='/' element={ <ProductsList /> }/>
        <Route path='company-profile/*'/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
