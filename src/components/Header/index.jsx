import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import { Container } from "@material-ui/core"

import logo from "../../assets/logo.svg"

export default function Header() {
    return (
        <Container>
            <header className="container">
                <Link to="/">
                    <img alt="logo" className="logo" src={logo} />
                </Link>

                <Link to="/reservas" style={{ textDecoration: "none" }}>
                    <div className="reservas">
                        <strong>Minhas reservas</strong>
                        <span>0 reservas</span>
                    </div>
                </Link>
            </header>
        </Container>
    )
}
