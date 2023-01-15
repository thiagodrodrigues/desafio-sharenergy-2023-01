import React, { useEffect, useState } from 'react'
import { Card } from './CardUsuario.style'
import lata from '../../assets/lata.svg'
import lapis from '../../assets/pencil.svg'
import { Link, useNavigate } from 'react-router-dom'
import { apiLocal } from '../../api/config'
import jwt_decode from "jwt-decode";
import { UsuariosProps } from '../../pages/ListaUsuario'

type CardProps = {
  _id: string,
  username: string,
  name: string,
  email: string,
  age: string,
  photo: string,
  index: number
}

const CardUsuario = ({_id, username, name, email, age, photo, index}:CardProps) => {

  const USUARIO = localStorage.getItem('token');

  const navigate = useNavigate()

  async function deleteUsuarios() {

    await  apiLocal.delete(`/users/${_id}`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })
      setTimeout(() => {window.location.reload(); navigate('/users'), 1000})
    }

  return (
    <Card>
      <div className='cardUser' style={{display: "flex", justifyContent:"space-between", flexWrap: "wrap", alignItems: "center"}}>
        <div>
        <h5>{name}</h5>
        </div>
        <div>
          <Link className='icone' to={`/users/${_id}`}><img style={{maxWidth: "15px"}} src={lapis} alt="icone de lápis" /></Link>
          <button className='icone'onClick={deleteUsuarios}><img style={{maxWidth: "15px"}} src={lata} alt="icone de lata" /></button>
        </div>
      </div>
      <div className='linha' style={{display: "flex", justifyContent:"space-between", flexWrap: "wrap", alignItems: "center"}}>
        <div className='photo' >
          <img src={photo} alt="foto de usuário" />
        </div>
        <div style={{maxWidth: "400px"}}>
          <h6 style={{maxWidth: "200px"}}>Username: <p>{username}</p></h6>
          <h6 style={{maxWidth: "200px"}}>Email: <p>{email}</p></h6>
          <h6 style={{maxWidth: "200px"}}>Idade: <p>{age}</p></h6>
        </div>
      </div>
    </Card>
  )
}

export default CardUsuario
