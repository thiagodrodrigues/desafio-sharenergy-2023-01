import React from 'react';
import Header from '../components/Header';
import { FormClientes } from '../components/FormClientes';
import { Footer } from '../components/Footer/Footer';


export default function ClientCreate() {
  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    <Header />
    <FormClientes status="Cadastrar"/>
    <Footer />
    </div>
  );
}