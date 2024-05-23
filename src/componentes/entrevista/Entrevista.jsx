import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListaEntrevistas from './ListaEntrevistas'
import Header from '../inicio/Header'

const Entrevista = () => {
  return (
    <>
    <Header/>
        <Routes>
            <Route path='/' element={<ListaEntrevistas/>}/>

        </Routes>
    </>
  )
}

export default Entrevista