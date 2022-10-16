import styled from "styled-components"

export const Main = styled.li`
    display: flex;
    flex-direction: row;
    row-gap: 10px;
    column-gap: 10px;
    margin: 5px 5px 5px 5px;
    background-color: #FFE53B;
    background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
    border-radius: 5px;

    @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
        display: flex;
        flex-direction: row;
        align-items: unset;
        width: 100%;
  }
`

export const ContainerLi = styled.li`
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3,
    .card-price {
        text-align: center;
        color: #ffffff;
        text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black;
      letter-spacing: 3px;
    }
    p{
        color: white;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const ImagemPizza = styled.img`
    width: 100%;
    height: 100px;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);

`

export const ButtonAdd = styled.div`
  display:flex;  
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size:1.4em;
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