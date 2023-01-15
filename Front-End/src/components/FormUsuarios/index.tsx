import React, { FormEvent, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { cadastroUser, atualizaUser } from '../../api/Users';
import { FormUsuariosStyle } from './FormUsuarios.style';
import { UsuariosProps } from '../../pages/ListaUsuario';
import { apiLocal } from '../../api/config';

export type statusFormulario = "Cadastrar" | "Atualizar";

type FormUsuariosProps = {
    status: statusFormulario
}

export const FormUsuarios = ({status}: FormUsuariosProps) => { 
    const [listaUsuarios, setListaUsuarios] = useState<UsuariosProps[]>([])
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [photo, setPhoto] = useState<string>("");
    const navigate = useNavigate()
    const params = useParams()
    const ID = params._id 

    const USUARIO = localStorage.getItem('token')

    async function getUser() {
      const { data } = await apiLocal.get(`/users`, {
        headers: {
          Authorization: `Bearer ${USUARIO}`
        }
      });
      setListaUsuarios(data)
    };
    useEffect(() => {getUser()}, []);

    if(ID && name == "" && email == "" && photo == "" && age == "" && username == "" && listaUsuarios.length !== 0){
        const userID = listaUsuarios.filter((parameter) => parameter._id.toLowerCase().includes(String(params._id).toLowerCase()));
    
        function usersDataID() {
            setName(userID[0].name)
            setEmail(userID[0].email)
            setAge(userID[0].age)
            setPhoto(userID[0].photo)
            setUsername(userID[0].username)
            setPassword(String(userID[0].password))
        } 
        usersDataID()
    }

    const newUser = async (event: FormEvent) => {
        event.preventDefault();
    
        const payload = {
            name,
            email,
            username,
            age,
            password,
            photo
        };
        if(ID)  { 
            try {
                const response = await atualizaUser(String(ID), payload);
                if (response.status !== 200) {
                  return alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
                }
                navigate("/users")
                ;
              } catch (error) {
                alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
              }
      } else {
        try {
            const response = await cadastroUser(payload);
            if (response.status !== 201) {
                return alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
            }
            navigate("/users")
            ;
        }   catch (error) {
                alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
        }
      }
    }
      return (
        <FormUsuariosStyle>
        <div className="Main" style={{display: "flex", margin: "10px", padding: "10px 20px", background: "#F5F5F5", border: "0.7px solid #CFCFCF", borderRadius: "14px" }}>
            <main className="container card my-5 p-5">
                <h1>{status} Usuário</h1>
                <div>
                    <form onSubmit={newUser}>
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
                                <label className="form-label">Username</label>
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                ></input>
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
                                <label className="form-label">Senha</label>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                        </div>
                        <div style={{padding: "5px"}} className="mb-3">
                            <div>
                                <label className="form-label">Idade</label>
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    value={age}
                                    onChange={(event) => setAge(event.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div style={{padding: "5px"}} className="mb-3">
                            <div>
                                <label className="form-label">Link de Foto</label>
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    value={photo}
                                    onChange={(event) => setPhoto(event.target.value)}
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
        </FormUsuariosStyle>
      )
}