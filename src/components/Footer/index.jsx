import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import { Container, Typography } from "@material-ui/core"

export default function Footer() {
    return (
        <Container
            maxWidth={false}
            style={{
                padding: "0",
                marginTop: "6rem",
                bottom: 0
            }}
        >
            <footer className="container">
                <Typography className="logo-title" variant="h5">
                    TRIPS <br />
                    REDUCER
                </Typography>

                <div className="reservas">
                    <Link to="/">Home</Link>
                    <Link to="/reservas">Minhas reservas</Link>
                </div>
            </footer>
        </Container>
    )
}
