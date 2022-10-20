import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  grid-column: 1/-1;
  background-color:white;
  background-image: linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%),
  linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%);
  background-size:50px 50px;
`
export const TextFooter = styled.div`
    margin-left: 10px;
    font-weight: bold;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
`