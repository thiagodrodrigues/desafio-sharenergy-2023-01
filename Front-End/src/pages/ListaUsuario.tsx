import { useEffect, useState, FormEvent } from "react"
import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import { TopSection } from "./Pages"
import Header from '../components/Header'
import { Footer } from "../components/Footer/Footer"
import jwt_decode from "jwt-decode"
import { apiLocal } from "../api/config"
import Pagination from "../components/ListaPagina/Paginas"
import { Search } from "../components/Search/Index"
import { ListaUsuarios } from "../components/Listagem"


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

  const [busca, setBusca] = useState<string>("")
  
  const listaFiltrada = listaUsuarios.filter((parameter) => parameter.name.toLowerCase().includes(busca.toLowerCase()) || parameter.email.toLowerCase().includes(busca.toLowerCase()) || parameter.username.toLowerCase().includes(busca.toLowerCase()));
  const lastPageFilter = Math.ceil(listaFiltrada.length/limitePorPagina);

  if (currentPage > lastPageFilter && lastPageFilter !== 0) {
     setCurrentPage(1)
  }

  useEffect(() => {
    getUsuarios()
  }, [])


  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <Header />
      <TopSection >
          <BemVindo
            user={decoded.user.name}
            text={"Aqui estão todos os usuários cadastrados"}
            />
        <Button text="Cadastrar Usuário" link="/users/create"/>
      </TopSection>
      <Search busca={busca} setBusca={setBusca}/>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPageFilter} maxLength={7}/> 
      <ListaUsuarios listaFiltrada={listaFiltrada} currentPage={currentPage}/>
      <Footer />
    </div>
  )
}

export default Usuarios