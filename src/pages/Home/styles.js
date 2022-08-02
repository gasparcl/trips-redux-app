import styled from "styled-components"
import { Grid } from "@material-ui/core"

export const StyledList = styled(Grid)`
    border-radius: 1rem;
    & .lista {
        text-align: center;
    }
    .trip-img {
        border-radius: 1rem;
        max-height: 220px;
        margin-bottom: 1rem;
        width: 100%;
        min-height: 220px;
    }
    .card {
        background: #ececec;
        border-radius: 1rem;
        padding: 1rem;
    }
    .mt-2 {
        margin-top: 1rem;
    }
`
