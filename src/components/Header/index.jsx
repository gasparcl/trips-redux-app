import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./style.css"
import { Container } from "@material-ui/core"

import logo from "../../assets/logo.svg"
import { StyledContainer } from "../../pages/styles"

export default function Header() {
    // === HOOKS ===
    const reservesSize = useSelector((state) => state.reserves.length)

    return (
        <Container
            maxWidth={false}
            style={{
                padding: "0",
                marginBottom: "6rem"
            }}
        >
            <header className="container">
                <Link to="/">
                    <img alt="logo" className="logo" src={logo} />
                </Link>

                <Link to="/reservas" style={{ textDecoration: "none" }}>
                    <div className="reservas">
                        <strong>Minhas reservas</strong>
                        {reservesSize > 0 && (
                            <span>
                                {reservesSize}
                                {` ${
                                    reservesSize > 1 ? "reservas" : "reserva"
                                }`}
                            </span>
                        )}
                    </div>
                </Link>
            </header>
        </Container>
    )
}
