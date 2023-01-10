import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link) `
  font-style: normal;
  font-size: 30px;
  color: #FFFFFF;
  background: #2C5EDE;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  text-transform: capitalize;
  text-decoration: none;
  :hover{
    color: white;
    text-decoration: none;
  }
  :visited{
    color: white;
    text-decoration: none;
  }
  :active{
    color: white;
    text-decoration: none;
  }
  @media only screen and (max-width: 375px){
  font-size: 28px;
  padding: 0px 20px;
  margin: 0 auto;
}
`
export const ButtonSubmit = styled.button `
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 0px;
  color: #FFFFFF;
  cursor: pointer;
  background: #377D22;
  border-radius: 10px;
  padding: 25px 125px 30px 125px;
  width: 53vw;
  max-width: 30vw;
  margin: 20px 0px;
  text-transform: capitalize;
  text-decoration: none;
  display: grid;
  :hover{
    color: white;
  }
  .login{
    display: grid;
    margin-top: 20px;
    font-size: 19px;
    input{
    color: red;
    width: 53vw;
    min-width: 100px;
    max-width: 300px;
    }


  @media only screen and (max-width: 375px){
  font-size: 28px;
  padding: 0px 0px;
  margin: 0 auto;
  }
`