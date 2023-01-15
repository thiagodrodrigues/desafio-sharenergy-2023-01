import { useEffect, useState, FormEvent } from "react"
import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import { TopSection } from "./Pages"
import { ListagemClientes } from "../components/Listagem"
import { Search } from "../components/Search/Index"
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

  const [busca, setBusca] = useState<string>("")

  const listaFiltrada = listaClients.filter((parameter) => parameter.name.toLowerCase().includes(busca.toLowerCase()) || parameter.email.toLowerCase().includes(busca.toLowerCase()) || String(parameter.cpf).includes(busca));
  const lastPageFilter = Math.ceil(listaFiltrada.length/limitePorPagina);

  if (currentPage > lastPageFilter && lastPageFilter !== 0) {
     setCurrentPage(1)
  }

  useEffect(() => {
    getClientes()
  }, [])

  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <Header />
      <TopSection >
          <BemVindo
            user={decoded.user.name}
            text={"Aqui estão todos os clientes cadastrados"}
            />
        <Button text="Cadastrar Cliente" link="/clients/create"/>
      </TopSection>
      <Search busca={busca} setBusca={setBusca}/>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPageFilter} maxLength={7}/>
      <ListagemClientes listaFiltrada={listaFiltrada} currentPage={currentPage}/>
      <Footer />
    </div>
  )
}

export default ListaClientes