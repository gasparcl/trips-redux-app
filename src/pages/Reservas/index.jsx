import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { Link } from "react-router-dom"
import { Typography, Container, Button } from "@material-ui/core"
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md"
import "./style.css"

import {
    deleteReserve,
    updateReserve,
    updateReserveAmount
} from "../../store/modules/reserves/actions"

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
        dispatch(updateReserveAmount(trip.id, trip.amount--))
    }

    function incrementAmount(trip) {
        dispatch(updateReserveAmount(trip.id, trip.amount++))
    }

    return (
        <>
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
                <>
                    {reserves.map((reserve) => (
                        <ul>
                            <li className="reservas-page" key={reserve.id}>
                                <img src={reserve.image} alt={reserve.title} />
                                <strong>{reserve.title}</strong>
                                <Button
                                    variant="contained"
                                    onClick={() => decrementAmount(reserve)}
                                >
                                    <MdRemoveCircle size={16} />
                                </Button>
                                <span>Quantidade: {reserve.amount}</span>
                                <Button
                                    variant="contained"
                                    onClick={() => incrementAmount(reserve)}
                                >
                                    <MdAddCircle size={16} />
                                </Button>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(reserve.id)}
                                    style={{ background: "transparent" }}
                                >
                                    <MdDelete size={20} color="#191919" />
                                </button>
                            </li>
                        </ul>
                    ))}
                </>
            </Container>
        </>
    )
}
