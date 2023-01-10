import React, { FormEvent, useState, useEffect } from "react";
import { ButtonSubmit } from "../Button/Button.styles";
import { TesteStyle, Login } from "./LoginApp.style";
import { useForm, SubmitHandler } from "react-hook-form";
import { apiLocal } from "../../api/config"
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png"

type Inputs = {
    username: string | null,
    password: string | null,
    checkbox: boolean,
    forget?: boolean
}

const LoginPageApp = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState<String>("")
  const [password, setPassword] = useState<String>("")
  const [checkbox, setCheckbox] = useState<Boolean>()

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  if(Boolean(localStorage.getItem('checkbox')) == true && localStorage.getItem('username') !== ""){
    if (username == "" && password == "") {
    const localStorageUsername = localStorage.getItem('username')
    const localStoragePassword = localStorage.getItem('password')
    const localStorageCheckbox = true
    const localStorageVoid = () => {
      setUsername(String(localStorageUsername));
      setPassword(String(localStoragePassword));
      setCheckbox(localStorageCheckbox);
    }
    localStorageVoid()
    };


    const forgetme = (element: FormEvent) => {
      element.preventDefault()
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      localStorage.removeItem('photo')
      localStorage.removeItem('id')
      localStorage.removeItem('checkbox')
      setTimeout(() => {window.location.reload(); navigate('/'), 1000})
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log(`linha 44, console data`, data)

      const submitInfos = () => {
        apiLocal.post(`/`, {
          username: data.username,
          password: data.password,
        }).then((res) => {
          localStorage.setItem('token', `${String(res.data.token)}`);
          localStorage.setItem('_id', `${String(res.data.User._id)}`);
          localStorage.setItem('photo', `${String(res.data.User.photo)}`);
          console.log(res)
        }).catch((err) => {
          console.log(err);
        });
      }
      submitInfos()
      setTimeout(() => navigate('/users'), 1000)
    }
    
    return(
    <>
      <Login className="Login">
        <TesteStyle onSubmit={handleSubmit(onSubmit)}>
          <div className="row"> 
            <label className="login">
              <p className="remember">DESAFIO SHARENERGY - THIAGO RODRIGUES</p>
              <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center logo"><img src={avatar} alt="logo" width={410}/></div>
            </label>
          </div>
          <div className='row'>
            <div className='col-12 col-md-12 '>
              <label className='username'>
                Username
                <input {...register('username', { required: true })} placeholder="Digite aqui o seu Username" value={String(username)} onChange={(event) => setUsername(event.target.value)}/>
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-12 '>
              <label className='password'>
                Senha
                <input {...register('password', { required: true })} type="password" placeholder="Digite aqui a sua Senha" value={String(password)} onChange={(event) => setPassword(event.target.value)}/>
              </label>
            </div>
          </div>
          <div className="row"> 
            <label className="login">
              <ButtonSubmit  >Login</ButtonSubmit>
              <p className="remember"><input {...register('checkbox')} className="checkbox" type="checkbox" checked={Boolean(checkbox)} onChange={(event) => setCheckbox(Boolean(event.target.checked))}/> Remember me</p>
              <div onClick={forgetme} className="forgetme" style={{cursor: "pointer", color: "FFFFFF", fontSize: "18px"}}><p>Forget me</p></div>
            </label>
          </div>
        </TesteStyle>
      </Login>
    </>
    )
  } else {

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const submitInfos = () => {
      apiLocal.post(`/`, {
        username: data.username,
        password: data.password,
      }).then((res) => {
        localStorage.setItem('token', `${String(res.data.token)}`);
        localStorage.setItem('_id', `${String(res.data.User._id)}`);
        localStorage.setItem('photo', `${String(res.data.User.photo)}`)
        if(data.checkbox == true){
        localStorage.setItem('username', `${data.username}`)
        localStorage.setItem('password', `${data.password}`)
        localStorage.setItem('checkbox', `${data.checkbox}`)
        }
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
    }
    submitInfos()
    setTimeout(() => navigate('/users'), 1000) 

  }
;

  return (
    <>
      <Login className="Login">
        <TesteStyle onSubmit={handleSubmit(onSubmit)}>
            <div className="row"> 
            <label className="login">
             <p className="remember">DESAFIO SHARENERGY - THIAGO RODRIGUES</p>
             <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center logo"><img src={avatar} alt="logo" width={410}/></div>
            </label>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='username'>
                Username
                <input {...register('username', { required: true })} placeholder="Digite aqui o seu Username" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='password'>
                Senha
                <input {...register('password', { required: true })} type="password" placeholder="Digite aqui a sua Senha" />
                </label>
            </div>
            </div>
            <div className="row"> 
            <label className="login">
              <ButtonSubmit  >Login</ButtonSubmit>
             <p className="remember"><input {...register('checkbox')} className="checkbox" type="checkbox" /> Remember me</p>
            </label>
            </div>
        </TesteStyle>
      </Login>
    </>
  )
}
}

export default LoginPageApp