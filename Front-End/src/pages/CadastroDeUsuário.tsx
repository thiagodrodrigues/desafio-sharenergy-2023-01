import { FormEvent, useState } from "react";
import { cadastroUser } from "../api/Users";
import Header from '../components/Header';
import { CadastroUsuarios } from "./Pages";
import { useNavigate } from "react-router-dom";


export default function UserCreate() {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const navigate = useNavigate()
  const returnUsers = () => {
      navigate('/users')
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
    try {
      const response = await cadastroUser(payload);
      if (response.status !== 201) {
        return alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
      }
      navigate("/users")
      ;
    } catch (error) {
      alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
    }
    
    
  };

  return (
    <>
    <Header />
    
    <div>
        <CadastroUsuarios>
        <div className="Main" style={{display: "flex", margin: "10px", padding: "10px 20px", background: "#F5F5F5", border: "0.7px solid #CFCFCF", borderRadius: "14px" }}>
            <main className="container card my-5 p-5">
                <h1>Cadastro de Usuário</h1>
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
                            Cadastrar
                        </button>
                    </form>
                </div>
            </main>
        </div>
        </CadastroUsuarios>
    </div>
    </>
  );
}