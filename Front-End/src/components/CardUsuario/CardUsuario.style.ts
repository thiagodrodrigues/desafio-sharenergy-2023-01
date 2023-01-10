import styled from "styled-components";

export const Card = styled.div`
  margin: 10px 10px;
  padding: 10px 20px;
  max-width: 100%;
  background: #F5F5F5;
  display: block;
  border: 0.7px solid #CFCFCF;
  border-radius: 14px;
  .photo{
    img{
      max-height: 50px
    }
  }

  @media only screen and (max-width: 800px){
      height: 90vh;
      button{
        margin-bottom: 27px;
      }
      }
    p{
      margin: 0 0 0 10px;
      font-family: 'Roboto';
      font-style: normal;
      font-size: 18px;
      display: flex;
      align-items: center;
      color: #2C5EDE;
      @media only screen and (max-width: 800px){
      font-size: 21px;
      margin: 0;
      }
    }
    p:first-letter {
      text-transform: uppercase;
      }
    h5{
      font-size: 25px;
      color: #2C5EDE;
      @media only screen and (max-width: 800px){
      font-size: 28px;
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
      display: block;
      margin: 0;
      }
    }
    h6{
      font-size: 12px;
      margin: 0 290px 0 10px;
      @media only screen and (max-width: 800px){
        margin: 0;
      }
    }
  .linha{
    margin: 10px 0px;
    @media only screen and (max-width: 800px){
    display: block !important;
    margin-bottom: 20px;
   }
  }
  .icone{
    margin-left: 40px;
  }
  .topo{
    margin-bottom: 80px;
    @media only screen and (max-width: 800px){
    display: block !important;
    margin-bottom: 40px;
   }
  }
`