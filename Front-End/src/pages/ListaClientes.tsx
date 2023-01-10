import { useEffect, useState, FormEvent } from "react"
import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CardCliente from "../components/CardCliente/CardCliente"
import { ListagemUsuarios, TopSection } from "./Pages"
import Header from '../components/Header'
import { Footer } from "../components/Footer/Footer"
import jwt_decode from "jwt-decode"
import { apiLocal } from "../api/config"
import Pagination from "../components/ListaPagina/Paginas"


export type ClientsProps = {
  decoded: Array<string>,
  name: string,
  email: string,
  phone: string,
  address: string,
  cpf: string,
  _id: string

}

const ListaClientes = (props: ClientsProps) => {

  const [currentPage, setCurrentPage] = useState(1);

  const [listaClients, setClients] = useState<ClientsProps[]>([])
  const limitePorPagina = 10
  const offset = (currentPage -1)*limitePorPagina

  const USUARIO = localStorage.getItem('token');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);

  async function getClientes() {
    const { data } = await  apiLocal.get(`/clients`, {
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })

    setClients(data)
  }


  let total = listaClients.length +1

  const [busca, setBusca] = useState<string>("")

  const listaFiltrada = listaClients.filter((parameter) => parameter.name.toLowerCase().includes(busca.toLowerCase()) || parameter.email.toLowerCase().includes(busca.toLowerCase()) || String(parameter.cpf).includes(busca));
  const atualListaClientesFiltrada = listaFiltrada.slice(offset, offset + limitePorPagina)
  const lastPageFilter = Math.ceil(listaFiltrada.length/limitePorPagina);
  const listaFiltradaDivLeft = atualListaClientesFiltrada.slice(0, Math.ceil(atualListaClientesFiltrada.length/2))
  const listaFiltradaDivRight = atualListaClientesFiltrada.slice(Math.ceil(atualListaClientesFiltrada.length/2))

  if (currentPage > lastPageFilter && lastPageFilter !== 0) {
     setCurrentPage(1)
  }

  useEffect(() => {
    getClientes()
  }, [])


  return (
    <>
      <Header />
      <TopSection >
        <div>
          <BemVindo
            user={decoded.user.name}
            text={"Aqui estão todos os clientes cadastrados"}

            />
        </div>
        <div className="cadastro">
        <Button text="Cadastrar Cliente" link="/clients/create"/>
        </div>
      </TopSection>
      <div style={{display: "flex", justifyContent: "center", margin: "15px" }}>
        <input type={"text"} value={busca} onChange={(event) => setBusca(event.target.value)} placeholder={"Search"} style={{borderRadius: "10px", fontSize: "18px", borderColor: "#2C5EDE", }} />
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPageFilter} maxLength={7}/> 
      {listaFiltrada.length === 0 ? 
        (<><div style={{display: "flex", justifyContent: "center", margin: "40px"}}><h1 style={{borderRadius: "10px", fontSize: "25px", color: "#2C5EDE", }}>Nenhum Cliente Encontrado</h1></div></>):
        (<div style={{display: "flex", flexDirection: "row", columns: "auto auto", columnWidth: "auto", justifyContent: "space-around"}}>
          <ListagemUsuarios >
          <div className="listaUsers" style={{display: "flex", flexDirection: "column", columns: "auto auto", columnWidth: "auto", maxWidth: "550px"}}>
            {listaFiltradaDivLeft.slice(0).map((listaClients, i) => (<CardCliente
            key={i}
            index={total-=1}
            _id={listaClients._id}
            name={listaClients.name}
            email={listaClients.email}
            phone={listaClients.phone}
            address={listaClients.address}
            cpf={listaClients.cpf}
            />))}
          </div>
          </ListagemUsuarios>
          <ListagemUsuarios >
          <div className="listaUsers" style={{display: "flex", flexDirection: "column", columns: "auto auto", columnWidth: "auto", maxWidth: "550px"}}>
            {listaFiltradaDivRight.slice(0).map((listaClients, i) => (<CardCliente
            key={i}
            index={total-=1}
            _id={listaClients._id}
            name={listaClients.name}
            email={listaClients.email}
            phone={listaClients.phone}
            address={listaClients.address}
            cpf={listaClients.cpf}
            />))}
          </div>
          </ListagemUsuarios>
          </div>
          )
        }
      <Footer />
    </>
  )
}

export default ListaClientes