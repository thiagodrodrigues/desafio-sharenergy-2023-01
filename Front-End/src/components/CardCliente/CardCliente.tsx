import React, { useEffect, useState } from 'react'
import { Card } from './CardCliente.style'
import lata from '../../assets/lata.svg'
import lapis from '../../assets/pencil.svg'
import { Link, useNavigate } from 'react-router-dom'
import { apiLocal } from '../../api/config'
import jwt_decode from "jwt-decode";
import { ClientsProps } from '../../pages/ListaClientes'

type CardProps = {
  _id: string,
  name: string,
  email: string,
  phone: string,
  address: string,
  cpf: string,
  index: number
}

const CardCliente = ({_id, name, email, phone, address, index, cpf}:CardProps) => {

  const [listaClients, setClients] = useState<ClientsProps[]>([])

  const USUARIO = localStorage.getItem('token');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);

  const navigate = useNavigate()

  async function getClientes() {
    const { data } = await  apiLocal.get(`/clients`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })
    setClients(data)
    }

  useEffect(() => {
    getClientes()

  }, [])

  async function deleteClients() {

    await  apiLocal.delete(`/clients/${_id}`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })
      setTimeout(() => {window.location.reload(); navigate('/clients'), 1000})
    }



  return (
    <Card>
      <div className='cardUser' style={{display: "flex", justifyContent:"space-between", flexWrap: "wrap", alignItems: "center"}}>
        <div>
        <h5>{name}</h5>
        </div>
      </div>
      <div className='linha' style={{display: "flex", justifyContent:"flex-start", flexWrap: "wrap", alignItems: "flex-start"}}>
        <div className='photo' >
          {/* <img src={photo} alt="foto de usuário" /> */}
        </div>
        <div style={{maxWidth: "100vw"}}>
          <h6 style={{maxWidth: "75vw", justifyContent: "flexStart"}}>Email: <p style={{maxWidth: "20vw"}}>{email}</p></h6>
          <h6 style={{maxWidth: "75vw"}}>Endereço: <p>{address}</p></h6>
        </div>
        <div style={{display: "flex", alignItems: "flex-end", width: "400px", justifyContent: "space-between"}}>
          <div>
            <h6 style={{maxWidth: "75vw"}}>Telefone: <p>{phone}</p></h6>
            <h6 style={{maxWidth: "75vw"}}>CPF: <p>{cpf}</p></h6>
          </div>
          <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between"}}>
            <Link className='icone' style={{margin: "2px"}} to={`/clients/${_id}`}><img style={{maxWidth: "15px"}} src={lapis} alt="icone de lápis" /></Link>
            <button className='icone' style={{maxWidth: "2px", cursor: "pointer"}} onClick={deleteClients}><img style={{maxWidth: "15px"}} src={lata} alt="icone de lata" /></button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CardCliente

/* 
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center; */