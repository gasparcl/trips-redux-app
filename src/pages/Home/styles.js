import styled from "styled-components"
import { List } from "@material-ui/core"

export const StyledList = styled(List)`
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    & .lista {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .trip-img {
        border-radius: 1rem;
        max-height: 220px;
        margin-bottom: 1rem;
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
