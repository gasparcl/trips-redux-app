import React from "react"
import { useSelector } from "react-redux"

import { Link } from "react-router-dom"
import { Typography, Container } from "@material-ui/core"
import { MdDelete } from "react-icons/md"
import "./style.css"

export default function Reservas() {
    // === HOOKS ===
    const reserves = useSelector((state) => state.reserves)
    const reservesSize = useSelector((state) => state.reserves.length)

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
                            <Typography variant="h5">Voltar</Typography>
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
                                <span>Quantidade: 2</span>
                                <button type="button" onClick={() => {}}>
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
