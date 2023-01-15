import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.div `
  display: flex;
  max-height: 150px;
  background: #2C5EDE;
  box-shadow: 0px 0.948611px 11.3833px rgba(0, 0, 0, 0.2);
  padding: 30px 0 30px 0px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .logo {
    margin: 0px 0px;
    min-width: 50px;
    max-width: 150px;
    min-height: 50px;
    max-height: 50px;
  }

  .avatar {
    margin: 0px 20px;
    max-width: 50px;
  }

  .links{
    margin: 10px 15px;
    max-width: 250px;  
    
    @media only screen and (max-width: 1084px) {
      margin: 10px 5px;
    }
    
    img {
      padding: 0px 20px
    }
  }

  @media only screen and (max-width: 960px) {
  }
`
export const LinkStyle = styled(Link) `
  font-family: 'Inter';
  font-style: normal;
  font-size: 40px;
  line-height: 18px;
  color: #FFFFFF;
  transition: 0.2s;

  @media only screen and (max-width: 1084px) {
    font-size: 25px;
  }
  
  
  :hover  {
    color: #2C5EDE;
    padding: 10px 15px;
    background: #FFFFFF;
    border-radius: 10px;
  }

  @media only screen and (max-width: 1245px)  {
  }
`