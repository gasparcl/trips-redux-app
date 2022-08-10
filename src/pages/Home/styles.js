import styled from "styled-components"
import { Grid } from "@material-ui/core"

export const StyledGrid = styled(Grid)`
    border-radius: 1rem;
    min-height: 70vh;
    & .lista {
        text-align: center;
    }
    .trip-img {
        height: 150px;
        padding: 1rem;
    }
    .card {
        border-radius: 1rem;
        max-width: 100%;
    }
    .MuiCardActions-root {
        justify-content: center;
    }
`
