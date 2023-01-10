import { apiLocal } from "./config";
import jwt_decode from "jwt-decode"

interface UserPayload {
  name: string;
  email: string;
  username: string;
  password: string;
  age: string;
  photo: string;
}
export function cadastroUser(payload: UserPayload) {
  return apiLocal.post("/users/create", payload);
}

export function atualizaUser(_id: string, payload: UserPayload) {
    const USUARIO = localStorage.getItem('token');
  
    const token = USUARIO;
    const decoded : any = jwt_decode(token!);
    return apiLocal.put(`/users/${_id}`, payload, {
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    });
  }
