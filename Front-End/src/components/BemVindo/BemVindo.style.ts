import styled from "styled-components";

export const BemVindoStyle = styled.div `
  heigth: 200px;

  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 71px;
    color: #141414;
    margin-top: 10px;
    margin-bottom: 52px;
    span{
      font-weight: 600;
      color: #2C5EDE;
    }
  }

  h4{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 31px;
    line-height: 36px;
    color: #2C5EDE;
  }

  h5{
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #777777;
  }

  span{
    text-transform: capitalize;
  }
  
  @media only screen and (max-width: 375px){
   }
`