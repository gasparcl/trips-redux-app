import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { Link } from "react-router-dom"
import { Typography, Container } from "@material-ui/core"
import { MdDelete } from "react-icons/md"
import "./style.css"

import { deleteReserve } from "../../store/modules/reserves/actions"

export default function Reservas() {
    // === HOOKS ===
    const reserves = useSelector((state) => state.reserves)
    const reservesSize = useSelector((state) => state.reserves.length)
    const dispatch = useDispatch()

    // === HANDLERS ===
    function handleDelete(id) {
        dispatch(deleteReserve(id))
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
                    {console.log(reserves)}
                    {reserves.map((reserve) => (
                        <ul>
                            <li className="reservas-page" key={reserve.id}>
                                <img src={reserve.image} alt={reserve.title} />
                                <strong>{reserve.title}</strong>
                                <span>Quantidade: {reserve.amount}</span>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(reserve.id)}
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
