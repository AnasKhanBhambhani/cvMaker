import React from 'react'
import Layout from '../../Interfaces/Shared/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Interfaces/Container/Home'
import Form from '../../Interfaces/Container/Form'
import Mycv from '../../Interfaces/Components/Mycv'
import Chosetemplate from '../../Interfaces/Components/Chosetemplate'
const Routing = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form/>}/>
        <Route path='/templates' element={<Chosetemplate/>}/>
        <Route path='/template/:id' element={<Mycv/>}/>
      </Routes>
    </Layout>
  )
}
export default Routing
