import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import React, { useState } from 'react'
import { HeaderStyle, LinkStyle } from './Header.style'
import { Link, useNavigate } from 'react-router-dom'


const index = () => {
  const USUARIO = localStorage.getItem('token');
  console.log(USUARIO === null)
  const photoUser = localStorage.getItem('photo')

  type HeaderProps = {
    photo: string
  }


  const navigate = useNavigate()
  const deslogar = () => {
    localStorage.setItem('token', ``);
    localStorage.setItem('_id', ``);
    setTimeout(() => navigate('/'), 1000)
  }


  return (
    <>
      <HeaderStyle className='d-flex justify-content-center align-items-center'>
            <Link to="/users"><img className="logo" src={avatar} alt="logo" /></Link>
            <LinkStyle className='links' style={{textDecoration: 'none'}} to="/users">Usuários</LinkStyle>
            <LinkStyle className='links' style={{textDecoration: 'none' }} to="/cats">API Cats</LinkStyle>
            <LinkStyle className='links' style={{textDecoration: 'none'}} to="/dogs">API Dogs</LinkStyle>
            <LinkStyle className='links' style={{textDecoration: 'none'}} to="/clients">Clientes</LinkStyle>
            <LinkStyle className='links' style={{textDecoration: 'none'}} to="/" onClick={deslogar}>Logout</LinkStyle>
            <img className="avatar" src={ photoUser? photoUser : avatar} alt="Foto de Usuário" />
      </HeaderStyle>
    </>
  )
}

export default index