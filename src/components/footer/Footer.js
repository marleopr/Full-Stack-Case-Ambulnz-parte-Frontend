import * as s from "./Footer.styled"
import "../../App.css"
import { FooterButton } from "./FooterButton"

export function Footer() {
    return (
        <s.Footer>
            <s.TextFooter>
                <FooterButton />
            </s.TextFooter>
        </s.Footer>
    )
}