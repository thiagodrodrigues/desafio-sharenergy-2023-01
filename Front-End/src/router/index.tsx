import {
  createBrowserRouter,
} from "react-router-dom";
import AppLogin from "../pages/LoginPage";
import UserCreate from "../pages/CadastroDeUsuário";
import ListaClientes from "../pages/ListaClientes";
import Usuarios from "../pages/ListaUsuario";
import EditaCliente from "../pages/EditaCliente";
import EditaUsuario from "../pages/EditaUsuario";
import ClientCreate from "../pages/CadastroNovoCliente";
import ApiCats from "../pages/APICats";
import ApiDogs from "../pages/APIDogs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLogin />,
    },
    {
        path: "/users/create",
        element: <UserCreate  />,
    },
    {
        path: "/users",
        element: <Usuarios decoded={[]} name={""} email={""} photo={""} username={""} age={""} _id={""} />,
    },
    {
        path: "/users/:_id",
        element: <EditaUsuario />,
    },
    {
        path: "/clients",
        element: <ListaClientes decoded={[]} name={""} email={""} phone={""} address={""} cpf={""} _id={""} />,
    },
    {
        path: "/clients/create",
        element: <ClientCreate />,
    },
    {
        path: "/clients/:_id",
        element: <EditaCliente />,
    },
    {
        path: "/cats",
        element: <ApiCats />,
    },
    
    {
        path: "/dogs",
        element: <ApiDogs />,
    },
    
])

export default router