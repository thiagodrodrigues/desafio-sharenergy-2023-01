import React from "react";
import Header from '../components/Header';
import { FormUsuarios } from "../components/FormUsuarios";
import { Footer } from "../components/Footer/Footer";


const EditaUsuario = () => {
  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    <Header />
    <FormUsuarios status="Atualizar"/>
    <Footer />
    </div>
  );
}
export default EditaUsuario