import { FormEvent, useState } from "react";
import { cadastroClient } from "../api/Clients";
import Header from '../components/Header';
import { CadastroClientes } from "./Pages";
import { useNavigate } from "react-router-dom";


export default function ClientCreate() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAdress] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const navigate = useNavigate()
  const returnClients = () => {
      navigate('/clients')
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
    try {
      const response = await cadastroClient(payload);
      if (response.status !== 201) {
        return alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
      }
      navigate("/clients")
      ;
    } catch (error) {
      alert("Ops... Deu algo errado. Por favor, revise os dados de cadastro e tente novamente");
    }
    
    
  };

  return (
    <>
    <Header />
    
    <div>
        <CadastroClientes>
        <div className="Main" style={{display: "flex", margin: "10px", padding: "10px 20px", background: "#F5F5F5", border: "0.7px solid #CFCFCF", borderRadius: "14px" }}>
            <main className="container card my-5 p-5">
                <h1>Cadastro de Cliente</h1>
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
                                    onChange={(event) => setAdress(event.target.value)}
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
                            Cadastrar
                        </button>
                    </form>
                </div>
            </main>
        </div>
        </CadastroClientes>
    </div>
    </>
  );
}