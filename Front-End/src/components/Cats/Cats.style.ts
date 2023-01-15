import styled from "styled-components";

export const CatsStyle = styled.div `
display: flex; 
flex-direction: column; 
align-items: center;

.apiCat {
    margin-top: 15px;
    label {
        font-size: 36px;
        color: #2C5EDE
    }
}

input {
    color: #000000;
    margin: 15px;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
    border-color: #000000
    font-weight: bolder;
    background: #C2C2C2;
}

button {
    color: #FFFFFF;
    cursor: pointer;
    margin: 15px;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
    border-color: #000000;
    font-weight: bolder;
    background: #2C5EDE
}

img {
    width: 400px
}
`