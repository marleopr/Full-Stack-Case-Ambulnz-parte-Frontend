import styled from "styled-components";

export const Footer = styled.div`
  grid-column: 1/-1;
  background-color:#2e2e2e;
  bottom: 0;
  position: fixed;
  width: 100vw;
  text-align: center;
  align-items: center;
  `

export const TextFooter = styled.div`
    color: white;
    text-decoration: none;
    color: inherit;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  
    :hover{
        cursor: pointer;
    }
`