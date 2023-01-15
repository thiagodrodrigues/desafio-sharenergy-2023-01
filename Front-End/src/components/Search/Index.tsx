import React, { useState } from 'react'
import { SearchStyle } from "./Search.style"

type SearchProps = {
    busca: string,
    setBusca: (busca: string) => void;
  }


export const Search = ({busca, setBusca}: SearchProps) => {
    return (
        <SearchStyle>
            <div>
                <input type={"text"} value={busca} onChange={(event) => setBusca(event.target.value)} placeholder={"Search"} />
            </div>
        </SearchStyle>
  )
}


