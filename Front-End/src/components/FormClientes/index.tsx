import React, { FormEvent, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { cadastroClient, atualizaClient } from '../../api/Clients';
import { FormClientesStyle } from './FormClientes.style';
import { ClientsProps } from '../../pages/ListaClientes';
import { apiLocal } from '../../api/config';
import { statusFormulario } from '../FormUsuarios';


type FormClientesProps = {
    status: statusFormulario
}

export const FormClientes = ({status}: FormClientesProps) => { 
    const [listaClientes, setListaClientes] = useState<ClientsProps[]>([])
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const navigate = useNavigate()
    const params = useParams()
    const ID = params._id 

    const USUARIO = localStorage.getItem('token')

    async function getClientes() {
        const { data } = await apiLocal.get(`/clients`, {
          headers: {
            Authorization: `Bearer ${USUARIO}`
          }
        });
        setListaClientes(data)
    }
    useEffect(() => {getClientes()}, []);

    if(ID && name == "" && email == "" && address == "" && phone == "" && cpf == "" && listaClientes.length !== 0){
        const clientID = listaClientes.filter((parameter) => parameter._id.toLowerCase().includes(String(params._id).toLowerCase()));
    
        function ClientDataID() {
            setName(clientID[0].name)
            setEmail(clientID[0].email)
            setAddress(clientID[0].address)
            setPhone(clientID[0].phone)
            setCpf(clientID[0].cpf)
        } 
        ClientDataID()
    }

    const newClient = async (event: FormEvent) => {
        event.preventDefault();
    
        const payload = {
            name,
            email,
            phone,
            address,
            cpf
          };
        if(ID)  { 
            try {
                const response = await atualizaClient(String(ID), payload);
                if (response.status !== 200) {
                  return alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
                }
                navigate("/clients")
                ;
              } catch (error) {
                alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
              }
      } else {
        try {
            const response = await cadastroClient(payload);
            if (response.status !== 201) {
                return alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
            }
            navigate("/clients")
            ;
        }   catch (error) {
                alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
        }
      }
    }
      return (
        <FormClientesStyle>
        <div className="Main" style={{display: "flex", margin: "10px", padding: "10px 20px", background: "#F5F5F5", border: "0.7px solid #CFCFCF", borderRadius: "14px" }}>
            <main className="container card my-5 p-5">
                <h1>{status} Cliente</h1>
                <div>
                    <form onSubmit={newClient}>
                        <div style={{padding: "5px"}} className="mb-3">
                            <div>
                                <label className="form-label">Nome</label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                        </div>
                        <div style={{padding: "5px"}} className="mb-3">
                            <div>
                                <label className="form-label">Email</label>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                        </div>
                        <div style={{padding: "5px"}} className="mb-3">
                            <div>
                                <label className="form-label">Telefone</label>
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                            </div>
                        </div>
                        <div style={{padding: "5px"}} className="mb-3">
                            <div>
                                <label className="form-label">Endereço</label>
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div style={{padding: "5px"}} className="mb-3">
                            <div>
                                <label className="form-label">CPF</label>
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    value={cpf}
                                    onChange={(event) => setCpf(event.target.value)}
                                ></input>
                            </div>
                        </div>
                        <button style={{cursor: "pointer", padding: "5px", background: "#2C5EDE", color: "#FFFFFF", borderRadius: "10px", borderColor: "#FFFFFF"}} type="submit" /* onClick={returnUsers} */ className="btn btn-primary">
                            {status}
                        </button>
                    </form>
                </div>
            </main>
        </div>
        </FormClientesStyle>
      )

}