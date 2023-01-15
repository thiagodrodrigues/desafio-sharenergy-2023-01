import styled from "styled-components";

export const DogsStyle = styled.div `
display: flex; 
flex-direction: column; 
align-items: center;

.apiDog {
    margin-top: 15px;
    label {
        font-size: 36px;
        color: #2C5EDE
    }
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