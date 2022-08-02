import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { MdFlightTakeoff } from "react-icons/md"
import api from "../../services/api"
import { Button, Container, Grid, Typography } from "@material-ui/core"
import { StyledList } from "./styles"

import { addReserveRequest } from "../../store/modules/reserves/actions"

export default function Home() {
    // === HOOKS ===
    const dispatch = useDispatch()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        async function loadApi() {
            const response = await api.get("trips")
            setTrips(response.data)
        }

        loadApi()
    }, [])

    // === HANDLERS ===
    function handleAdd(id) {
        dispatch(addReserveRequest(id))
    }

    return (
        <>
            <Container>
                <StyledList container spacing={2}>
                    {trips.map((trip) => (
                        <Grid
                            item
                            sm={4}
                            xs="auto"
                            className="lista"
                            key={trip.id}
                        >
                            <div className="card">
                                <img
                                    className="trip-img"
                                    src={trip.image}
                                    alt={trip.title}
                                />
                                <Typography variant="h6">
                                    {trip.title}
                                </Typography>
                                <Typography variant="body2">
                                    Status:{" "}
                                    {trip.status
                                        ? "Disponível"
                                        : "Indisponível"}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleAdd(trip.id)}
                                    className="mt-2"
                                    startIcon={
                                        <MdFlightTakeoff
                                            size={18}
                                            color="fff"
                                        />
                                    }
                                >
                                    Reservar!
                                </Button>
                            </div>
                        </Grid>
                    ))}
                </StyledList>
            </Container>
        </>
    )
}
