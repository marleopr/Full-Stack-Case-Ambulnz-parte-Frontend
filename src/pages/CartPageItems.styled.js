import styled from "styled-components"

export const EstiloItems = styled.div`

:hover{
        color: antiquewhite;
        cursor: pointer;
}
`


export const ContainerLi = styled.li`
        display: flex;
        flex-direction: row;
`

export const ButtonRemove = styled.div`
    width: 30px;
    height: 30px;
    align-items: center;
    text-align: center;
    :hover{
        cursor: pointer;
        font-weight: bold;
        color: #f55c5c;
    }
    :active{
        background-color: #f55c5c;
    }
`