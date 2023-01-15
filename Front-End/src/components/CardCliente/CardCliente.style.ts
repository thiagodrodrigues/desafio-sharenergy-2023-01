import styled from "styled-components";

export const Card = styled.div`
  margin: 10px 10px;
  padding: 10px 20px;
  max-width: 100%;
  width: 400px;
  background: #F5F5F5;
  display: block;
  border: 0.7px solid #CFCFCF;
  border-radius: 14px;

  .photo  {
    img{
      max-height: 50px
    }
  }

  @media only screen and (max-width: 800px) {
  }

  p {
    margin: 0 0 0 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #2C5EDE;

    @media only screen and (max-width: 800px) {
    }
  }

  p:first-letter {
    text-transform: uppercase;
  }

  h5{
    font-size: 25px;
    color: #2C5EDE;
    
    @media only screen and (max-width: 800px){
    }
  }

  h5:first-letter {
    text-transform: uppercase;
  }

  h6{
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #464A53;

    @media only screen and (max-width: 800px){
    }
  }

  h6{
    font-size: 12px;
    margin: 0 10px 0 10px;
  
    @media only screen and (max-width: 800px){
    }
  }

  .linha  {
    margin: 10px 0px;
    justify-content: flex-start;
    
    @media only screen and (max-width: 800px) {
   }
  }

  .icone  {
    margin-left: 5px;
  }

  .topo {
    margin-bottom: 80px;

    @media only screen and (max-width: 800px) {
    }
  }
`