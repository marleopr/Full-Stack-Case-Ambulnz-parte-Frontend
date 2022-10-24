import * as s from "./Footer.styled"
import "../../App.css"
import { FooterButton } from "./FooterButton"

export function Footer() {
    return (
        <s.Footer>
            <s.TextFooter>
                {/* <a href="https://github.com/marleopr" target="_blank" rel="noopener noreferrer">© 2022 by Márleo Piber</a> */}
            <FooterButton />
            </s.TextFooter>
        </s.Footer>
    )
}