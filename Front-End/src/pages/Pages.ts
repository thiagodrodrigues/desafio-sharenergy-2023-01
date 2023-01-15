import styled from 'styled-components'

export const TopSection = styled.div`
  display: flex;
  align-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  
  div{
    float: left;
  };
  .cadastro{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 300px;
    margin: 50px
  }
  .listaUsers{
    padding: 10px;
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
export const ListagemUsuarios = styled.div`
padding: 50px;
display: flex;
align-content: space-between;
flex-wrap: wrap;
justify-content: space-around;
`

export const CadastroUsuarios = styled.div`
padding: 50px;
display: flex;
align-content: space-between;
flex-wrap: wrap;
justify-content: space-around;
`

export const CadastroClientes = styled.div`
padding: 50px;
display: flex;
align-content: space-between;
flex-wrap: wrap;
justify-content: space-around;
`
