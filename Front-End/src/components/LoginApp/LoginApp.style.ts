import styled from "styled-components";

export const  TesteStyle = styled.form`
    box-sizing: border-box;
    background: #001839;
    border: 0.9875px solid #CFCFCF;
    border-radius: 15.8px;
    padding: 2% 2%;
    position: fixed;
    margin-top: -100vh;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    max-width: 450px;

    input{
        border-radius: 10px;
        border: #DDDFE1 solid 1px;
        max-width: 100%;
        min-width: 100%;
        min-height: 53px;
        padding-left: 17px;    
        }
    input::placeholder{
        color: #abafb3;
        font-size: 14px;
    }
    .login{
      color: white;
      display: grid;
      margin-top: 20px;
      font-size: 19px;

      input {
        color: red;
        width: 53vw;
        min-width: 100px;
        max-width: 300px;
      }
    }

    .username   {
        display: grid;
        color: white;
        margin-top: 20px;
        font-size: 19px;
    }

    .password   {
        display: grid;
        color: white;
        margin-top: 20px;
        font-size: 19px;

        input   {
            max-width: 30vw;
            margin-top: 9px;
        }
    }

    .remember   {
        display: table-row;
    }

    .title   {
        text-align: center;
    }

    .login input    {
        min-width: 10px;
        max-width: 15px;
        width: 10vw;
        min-height: 10px;
        max-height: 15px;
    }
    
    @media only screen and (max-width: 450px){
        }
    }
`

export const  Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 800px){
    }

    
    @media only screen and (max-width: 450px){
    }
`
