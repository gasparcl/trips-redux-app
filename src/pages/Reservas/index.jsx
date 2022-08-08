import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { Link } from "react-router-dom"
import { Typography, Container } from "@material-ui/core"
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md"
import "./style.css"

import {
    deleteReserve,
    updateReserveAmountRequest
} from "../../store/modules/reserves/actions"
import { StyledButton } from "./styles"

export default function Reservas() {
    // === HOOKS ===
    const reserves = useSelector((state) => state.reserves)
    const reservesSize = useSelector((state) => state.reserves.length)
    const dispatch = useDispatch()

    // === HANDLERS ===
    function handleDelete(id) {
        dispatch(deleteReserve(id))
    }

    function decrementAmount(trip) {
        dispatch(updateReserveAmountRequest(trip.id, trip.amount - 1))
    }

    function incrementAmount(trip) {
        dispatch(updateReserveAmountRequest(trip.id, trip.amount + 1))
    }

    return (
        <Container style={{ padding: "0" }}>
            {reservesSize > 0 ? (
                <Typography variant="h3">
                    Você solicitou {reservesSize}
                    {` ${reservesSize > 1 ? "reservas" : "reserva"}`}
                </Typography>
            ) : (
                <>
                    <Typography variant="h3">
                        Você ainda não tem reservas
                    </Typography>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Typography variant="h6">Voltar</Typography>
                    </Link>
                </>
            )}
            <ul>
                {(reserves || []).map((reserve) => (
                    <li className="reservas-page" key={reserve.id}>
                        <img src={reserve.image} alt={reserve.title} />
                        <strong>{reserve.title}</strong>
                        <div className="reservas-buttons">
                            <StyledButton
                                variant="text"
                                onClick={() => decrementAmount(reserve)}
                            >
                                <MdRemoveCircle size={20} />
                            </StyledButton>
                            <span>Quantidade: {reserve.amount}</span>
                            <StyledButton
                                variant="text"
                                onClick={() => incrementAmount(reserve)}
                            >
                                <MdAddCircle size={20} />
                            </StyledButton>
                            <StyledButton
                                variant="text"
                                onClick={() => handleDelete(reserve.id)}
                            >
                                <MdDelete size={20} color="#ff0000" />
                            </StyledButton>
                        </div>
                    </li>
                ))}
            </ul>
        </Container>
    )
}
