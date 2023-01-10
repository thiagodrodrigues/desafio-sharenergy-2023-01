import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Footer } from "../components/Footer/Footer"

export type ApiProps = {
    status: Number
  }


const ApiCats = () => {

    const baseURL = "https://http.cat/"
    const [imagem, setImagem ] = useState<string>("https://http.cat/100.jpg")
    const [status, setStatus ] = useState<string>("100")

    console.log("LINHA 17", status)

    const getApiCat = (event: any) => {
        event = String(status)
        const apiCat = `${baseURL}${event}.jpg`
        console.log(`APICAT FUNCTION`, apiCat)
        setImagem(apiCat);
    }

    return (
        <>
          <Header />
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{marginTop: "15px"}}>
                    <label style={{fontSize: "36px", color: "#2C5EDE"}} className="form-label">Status Code</label>
                </div>
                <div>
                    <input
                        className="form-control"
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                        style={{color:"#000000", margin: "15px", borderRadius: "10px", padding:"10px", fontSize: "18px", borderColor: "#000000", fontWeight: "bolder", background: "#C2C2C2" }}
                    ></input>
                    <button onClick={getApiCat} style={{color:"#FFFFFF", cursor: "pointer", margin: "15px", padding:"10px", borderRadius: "10px", fontSize: "18px", borderColor: "#000000", fontWeight: "bolder", background: "#2C5EDE" }}>Buscar</button>
                </div>
                <div>
                    <img src={imagem} style={{width: "400px"}}></img>
                </div>
          </div>
          <Footer/>
        </>
    )
}

export default ApiCats