import * as s from "./Header.styled"
import ambLogo from "../../assets/img/ambulnzLogo.png"

export function Header() {
    return (
        <s.Header>
            <s.HeaderImg src={ambLogo} />
        </s.Header>
    )
}