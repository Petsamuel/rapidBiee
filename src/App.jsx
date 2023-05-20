import './App.css'
import { Fragment } from 'react'
import { Layout } from './components/Layout'
import { Home } from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <Fragment>
      <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </Layout>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
