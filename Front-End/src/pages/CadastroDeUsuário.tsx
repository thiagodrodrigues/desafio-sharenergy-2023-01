import React from "react";
import Header from '../components/Header';
import { FormUsuarios } from "../components/FormUsuarios";
import { Footer } from "../components/Footer/Footer";


export default function UserCreate() {
    return (
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    <Header />
    <FormUsuarios status="Cadastrar"/>
    <Footer />
    </div>
  );
}