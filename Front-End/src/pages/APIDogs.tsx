import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Footer } from "../components/Footer/Footer"
import { apiLocal } from '../api/config'
import jwt_decode from "jwt-decode"
import { Dogs } from '../components/Dogs'



const ApiDogs = () => {
    return (
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <Header />
        <Dogs />
        <Footer/>
      </div>
    )
}

export default ApiDogs