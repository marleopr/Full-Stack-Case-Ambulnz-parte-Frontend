import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 30vw;
    background-color: #ffffff;
`

export const DentroCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
     width: 90%;
    background: rgb(255,100,137);
    background: linear-gradient(90deg, rgba(255,100,137,1) 0%, rgba(249,178,78,1) 100%);
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
`

export const ContainerSection = styled.section`
    width: 25em;
    height: 335px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        font-size: 1.5em;
        text-align: center;
        color: white;
        text-shadow: -1px 0 black, 0 1px black,      
        1px 0 black, 0 -1px black;
    }
`

export const TotalConfirma = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #ffffff;
    h2{
    text-shadow: -1px 0 black, 0 1px black,      
    1px 0 black, 0 -1px black;
    }
`

export const ButtonPlaceOrder = styled.div`
  display:flex;  
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 30px;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  text-decoration:none;
  border-radius:6px;
  background-color:#ff9900;
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    background-position: -60px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  :active {
    transform: scale(1);
    background-position: 500px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  @media screen and (max-device-width : 480px){
    width: 150px;
    height: 30px;
    margin: 10px 0 10px 0;
  } 
`