import React, { useState } from "react";
import { CatsStyle } from "./Cats.style";

export const Cats = () => {

    const baseURL = "https://http.cat/"
    const [imagem, setImagem ] = useState<string>("https://http.cat/100.jpg")
    const [status, setStatus ] = useState<string>("100")

    const getApiCat = (event: any) => {
        event = String(status)
        const apiCat = `${baseURL}${event}.jpg`
        console.log(`APICAT FUNCTION`, apiCat)
        setImagem(apiCat);
    }

    return (
        <CatsStyle>
              <div className="apiCat">
                  <label className="form-label">Status Code</label>
              </div>
              <div>
                  <input
                      className="form-control"
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                  ></input>
                  <button onClick={getApiCat} >Buscar</button>
              </div>
              <div>
                  <img src={imagem} ></img>
              </div>
        </CatsStyle>
    )
}