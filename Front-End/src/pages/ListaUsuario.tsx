import { useEffect, useState, FormEvent } from "react"
import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CardUsuario from "../components/CardUsuario/CardUsuario"
import { ListagemUsuarios, TopSection } from "./Pages"
import Header from '../components/Header'
import { Footer } from "../components/Footer/Footer"
import jwt_decode from "jwt-decode"
import { apiLocal } from "../api/config"
import Pagination from "../components/ListaPagina/Paginas"


export type UsuariosProps = {
  decoded: Array<string>,
  name: string,
  email: string,
  photo: string,
  age: string,
  username: string,
  password?: string
  _id: string

}

const Usuarios = (props: UsuariosProps) => {

  const [currentPage, setCurrentPage] = useState(1);

  const [listaUsuarios, setUsers] = useState<UsuariosProps[]>([])
  const limitePorPagina = 10
  const offset = (currentPage -1)*limitePorPagina

  const USUARIO = localStorage.getItem('token');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);

  async function getUsuarios() {
    const { data } = await  apiLocal.get(`/users`, {
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })

    setUsers(data)
  }


  let total = listaUsuarios.length +1

  const [busca, setBusca] = useState<string>("")

  const listaFiltrada = listaUsuarios.filter((parameter) => parameter.name.toLowerCase().includes(busca.toLowerCase()) || parameter.email.toLowerCase().includes(busca.toLowerCase()) || parameter.username.toLowerCase().includes(busca.toLowerCase()));
  const atualListaUsuariosFiltrada = listaFiltrada.slice(offset, offset + limitePorPagina)
  const lastPageFilter = Math.ceil(listaFiltrada.length/limitePorPagina);
  const listaFiltradaDivLeft = atualListaUsuariosFiltrada.slice(0, Math.ceil(atualListaUsuariosFiltrada.length/2))
  const listaFiltradaDivRight = atualListaUsuariosFiltrada.slice(Math.ceil(atualListaUsuariosFiltrada.length/2))

  if (currentPage > lastPageFilter && lastPageFilter !== 0) {
     setCurrentPage(1)
  }

  useEffect(() => {
    getUsuarios()
  }, [])


  return (
    <>
      <Header />
      <TopSection >
        <div>
          <BemVindo
            user={decoded.user.name}
            text={"Aqui estão todos os usuários cadastrados"}

            />
        </div>
        <div className="cadastro">
        <Button text="Cadastrar Usuário" link="/users/create"/>
        </div>
      </TopSection>
      <div style={{display: "flex", justifyContent: "center", margin: "15px" }}>
        <input type={"text"} value={busca} onChange={(event) => setBusca(event.target.value)} placeholder={"Search"} style={{borderRadius: "10px", fontSize: "18px", borderColor: "#2C5EDE", }} />
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPageFilter} maxLength={7}/> 
      {listaFiltrada.length === 0 ? 
        (<><div style={{display: "flex", justifyContent: "center", margin: "40px"}}><h1 style={{borderRadius: "10px", fontSize: "25px", color: "#2C5EDE", }}>Nenhum Usuário Encontrado</h1></div></>):
        (<div style={{display: "flex", flexDirection: "row", columns: "auto auto", columnWidth: "auto", justifyContent: "space-around"}}>
          <ListagemUsuarios >
          <div className="listaUsers" style={{display: "flex", flexDirection: "column", columns: "auto auto", columnWidth: "auto", maxWidth: "550px"}}>
            {listaFiltradaDivLeft.slice(0).map((listaUsuarios, i) => (<CardUsuario
            key={i}
            index={total-=1}
            _id={listaUsuarios._id}
            username={listaUsuarios.username}
            name={listaUsuarios.name}
            email={listaUsuarios.email}
            age={listaUsuarios.age}
            photo={listaUsuarios.photo}
            />))}
          </div>
          </ListagemUsuarios>
          <ListagemUsuarios >
          <div className="listaUsers" style={{display: "flex", flexDirection: "column", columns: "auto auto", columnWidth: "auto", maxWidth: "550px"}}>
            {listaFiltradaDivRight.slice(0).map((listaUsuarios, i) => (<CardUsuario
            key={i}
            index={total-=1}
            _id={listaUsuarios._id}
            username={listaUsuarios.username}
            name={listaUsuarios.name}
            email={listaUsuarios.email}
            age={listaUsuarios.age}
            photo={listaUsuarios.photo}
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

export default Usuarios