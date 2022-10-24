import styled from "styled-components";

export const Footer = styled.div`
  /* display: flex;
  align-items: center;
  width: 100vw;
  height: 60px; */
  grid-column: 1/-1;
  background-color:#2e2e2e;


  /* background-image: linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%),
  linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%);
  background-size:50px 50px; */

  bottom: 0;
  position: fixed;
  width: 100vw;
  text-align: center;
  align-items: center;
  `

export const TextFooter = styled.div`
    /* margin-left: 10px; */
    /* font-weight: bold;
    /* width: 200px; */
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