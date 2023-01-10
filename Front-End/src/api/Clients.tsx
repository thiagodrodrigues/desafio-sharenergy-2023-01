import { apiLocal} from "./config";
import jwt_decode from "jwt-decode"

interface ClientPayload {
  name: string;
  email: string;
  address: string;
  cpf: string;
  phone: string;
}
export function cadastroClient(payload: ClientPayload) {
  const USUARIO = localStorage.getItem('token');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);
  return apiLocal.post("/clients/create", payload, {
    headers: {
      Authorization: `Bearer ${USUARIO}`
    }
  });
}

export function atualizaClient(_id: string, payload: ClientPayload) {
  const USUARIO = localStorage.getItem('token');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);
  return apiLocal.put(`/clients/${_id}`, payload, {
    headers: {
      Authorization: `Bearer ${USUARIO}`
    }
  });
}
