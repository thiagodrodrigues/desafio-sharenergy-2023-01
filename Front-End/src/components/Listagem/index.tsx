import React, { useState } from 'react'
import { Listagem } from './Listagem.style'
import CardUsuario from '../CardUsuario/CardUsuario'
import CardCliente from '../CardCliente/CardCliente'

type ListaProps = {
    listaFiltrada: any[],
    currentPage: number,
}

export const ListaUsuarios = ({listaFiltrada, currentPage}: ListaProps) => {
    if (listaFiltrada.length === 0) {
        return (
            <h1>Nenhum Usuário Encontrado</h1>
        )
    } else {
        let total = listaFiltrada.length +1
        const limitePorPagina = 10
        const offset = (currentPage -1)*limitePorPagina
        const atualListaUsuariosFiltrada = listaFiltrada.slice(offset, offset + limitePorPagina)
        const listaFiltradaDivLeft = atualListaUsuariosFiltrada.slice(0, Math.ceil(atualListaUsuariosFiltrada.length/2))
        const listaFiltradaDivRight = atualListaUsuariosFiltrada.slice(Math.ceil(atualListaUsuariosFiltrada.length/2))
        return (
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around"}}>
            <Listagem>
                {listaFiltradaDivLeft.slice(0).map((listaTotal, i) => (
                    <CardUsuario
                        key={i}
                        index={total-=1}
                        _id={listaTotal._id}
                        username={listaTotal.username}
                        name={listaTotal.name}
                        email={listaTotal.email}
                        age={listaTotal.age}
                        photo={listaTotal.photo}
                        />
                ))}
            </Listagem>
            <Listagem>
                {listaFiltradaDivRight.slice(0).map((listaTotal, i) => (
                    <CardUsuario
                        key={i}
                        index={total-=1}
                        _id={listaTotal._id}
                        username={listaTotal.username}
                        name={listaTotal.name}
                        email={listaTotal.email}
                        age={listaTotal.age}
                        photo={listaTotal.photo}
                        />
                ))}
            </Listagem>
            </div>
        )
    }
}

export const ListagemClientes = ({listaFiltrada, currentPage}: ListaProps) => {
    if (listaFiltrada.length === 0) {
        return (
            <h1>Nenhum Cliente Encontrado</h1>
        )
    } else {
        let total = listaFiltrada.length +1
        const limitePorPagina = 10
        const offset = (currentPage -1)*limitePorPagina
        const atualListaUsuariosFiltrada = listaFiltrada.slice(offset, offset + limitePorPagina)
        const listaFiltradaDivLeft = atualListaUsuariosFiltrada.slice(0, Math.ceil(atualListaUsuariosFiltrada.length/2))
        const listaFiltradaDivRight = atualListaUsuariosFiltrada.slice(Math.ceil(atualListaUsuariosFiltrada.length/2))
        return (
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around"}}>
            <Listagem>
                {listaFiltradaDivLeft.slice(0).map((listaTotal, i) => (
                    <CardCliente
                    key={i}
                    index={total-=1}
                    _id={listaTotal._id}
                    name={listaTotal.name}
                    email={listaTotal.email}
                    phone={listaTotal.phone}
                    address={listaTotal.address}
                    cpf={listaTotal.cpf}
                    />
                ))}
            </Listagem>
            <Listagem>
                {listaFiltradaDivRight.slice(0).map((listaTotal, i) => (
                    <CardCliente
                    key={i}
                    index={total-=1}
                    _id={listaTotal._id}
                    name={listaTotal.name}
                    email={listaTotal.email}
                    phone={listaTotal.phone}
                    address={listaTotal.address}
                    cpf={listaTotal.cpf}
                    />
                ))}
            </Listagem>
            </div>
        )
    }
}