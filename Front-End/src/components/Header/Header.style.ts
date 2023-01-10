import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.div `
max-height: 150px;
background: #2C5EDE;
box-shadow: 0px 0.948611px 11.3833px rgba(0, 0, 0, 0.2);
padding: 30px 0 50px 75px;
position: relative;
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
  img {
    padding: 0px 20px
  }
}
@media only screen and (max-width: 960px){
    justify-content: center !important;;
  .links img{
    position: absolute;
    top: 15px;
    right: 25px;
    }
  .linksin{
    display: none;
  }
}
`
export const LinkStyle = styled(Link) `
margin: 50px 50px 50px 50px;
font-family: 'Inter';
font-style: normal;
font-size: 40px;
line-height: 18px;
color: #FFFFFF;
transition: 0.2s;
:hover{
  color: #2C5EDE;
  padding: 10px 15px;
  background: #FFFFFF;
  border-radius: 10px;
}
@media only screen and (max-width: 1245px){
margin: 0 10px;
}
`

/* export const Menu = styled.div `
margin: 0;
margin-left: 35px;
margin-top: 20px;
box-sizing: border-box;
position: absolute;
z-index: 2;
@media only screen and (min-width: 960px){
  display: none;
}
.Menu{
  position: fixed;
  min-height: 100vh;
  max-width: 100vw;
  width: 100vw;
}
.icon{
  position: absolute;
  z-index: 4;
  left: 1%;
  width: fit-content;
  height: 44px;
  cursor: pointer;
}
.hamburguer{
  top: 50%;
  left: 10%;
  width: 20px;
  height: 6px;
  background: #F5F5F5;
  border-radius: 2px;
  position: absolute;
  transition: 0.5s;
}
.hamburguer::before{
  top: -12px;
  content: '';
  position: absolute;
  width: 30px;
  height: 6px;
  background: #F5F5F5;
  border-radius: 2px;
  transition: 0.2s;
}
.hamburguer::after{
  top: 12px;
  content: '';
  position: absolute;
  width: 33px;
  height: 6px;
  background: #F5F5F5;
  border-radius: 2px;
  transition: 0.2s;
}
.list{
  display: flex;
  flex-direction: column;
  left: 1%;
  padding: 45px 0 0;
  flex-wrap: nowrap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 15.1778px;
  line-height: 18px;
  color: #2C5EDE;
}
.list .listItems{
  padding: 0;
  list-style: none;
}
.list .listItems li{
  margin: 2px 8px;
  cursor: pointer;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #1FC4CC;;
}
.list .listItems li:hover{
  font-weight: 800;
}
.icon.iconActive .hamburguer{
  background: transparent;
  box-shadow: 0 2px 5px transparent;
}
.icon.iconActive .hamburguer:after{
top: 0;
background: #2C5EDE;
transform: rotate(225deg);
border-radius: 2px;
}
.icon.iconActive .hamburguer:before{
top: 0;
width: 32px;
background: #2C5EDE;
border-radius: 2px;
transform: rotate(135deg);
}
.menu.menuOpen{
  width: 140px;
  height: 420px;
  text-align: center;
  margin-left: -10px;
  background: #F5F5F5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
}
` */