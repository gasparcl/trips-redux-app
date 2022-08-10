import styled from "styled-components"
import { Link } from "react-router-dom"

import { Container } from "@material-ui/core"

export const StyledContainer = styled(Container)`
    min-height: 53.9vh;
    & .MuiContainer-maxWidthLg {
        max-width: 1040px;
    }
`
export default styled(Link)`
    text-decoration: none;
    display: inline-flex;
    height: 0;
    width: 0;
`
