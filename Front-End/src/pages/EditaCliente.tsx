import React from 'react';
import Header from '../components/Header';
import { FormClientes } from '../components/FormClientes';
import { Footer } from '../components/Footer/Footer';


const EditaCliente = () => {
  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    <Header />
    <FormClientes status="Atualizar"/>
    <Footer />
    </div>
  );
}

export default EditaCliente