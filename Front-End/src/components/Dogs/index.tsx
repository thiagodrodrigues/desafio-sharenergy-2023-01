import React, { useState } from "react";
import { DogsStyle } from "./Dogs.style";
import Header from "../Header"
import { Footer } from "../Footer/Footer"
import { apiLocal } from "../../api/config";
import jwt_decode from "jwt-decode"

export const Dogs = () => {

    const [imagem, setImagem ] = useState<string>("https://random.dog/526590d2-8817-4ff0-8c62-fdcba5306d02.jpg")

    const USUARIO = localStorage.getItem('token');

    const token = USUARIO;
    const decoded : any = jwt_decode(token!);

    async function getApiDog() {
        const { data } = await apiLocal.get("/dogs", {
            headers: {
              Authorization: `Bearer ${USUARIO}`
            }
          })

        setImagem(data)
    }

    return (
        <DogsStyle>
            <div className="apiDog" style={{marginTop: "15px"}}>
                <label style={{fontSize: "36px", color: "#2C5EDE"}} className="form-label">API Random Dog</label>
            </div>
            <div>
                <button onClick={getApiDog} style={{color:"#FFFFFF", cursor: "pointer", margin: "15px", padding:"10px", borderRadius: "10px", fontSize: "18px", borderColor: "#000000", fontWeight: "bolder", background: "#2C5EDE" }}>Atualizar Imagem</button>
            </div>
            <div>
                <img src={imagem} style={{width: "400px"}}></img>
            </div>
        </DogsStyle>
    )
}