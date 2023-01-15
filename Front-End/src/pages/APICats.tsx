import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Footer } from "../components/Footer/Footer"
import { Cats } from '../components/Cats'

export type ApiProps = {
    status: Number
  }


const ApiCats = () => {
    return (
        <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <Header />
          <Cats />
          <Footer/>
        </div>
    )
}

export default ApiCats