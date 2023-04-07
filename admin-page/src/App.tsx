import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import ProductsList from './routes/ProductsList'
import CompanyProfile from './routes/CompanyProfile'
import Login from './routes/Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route path='/' element={ <ProductsList /> } />
        <Route path='/company-profile' element={ <CompanyProfile /> } />
      </Route>
      <Route path='/login' element={ <Login /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
