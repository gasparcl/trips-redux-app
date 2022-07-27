import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { MdFlightTakeoff } from "react-icons/md"
import api from "../../services/api"
import { Button, Container, ListItem, Typography } from "@material-ui/core"
import { StyledList } from "./styles"

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
    function handleAdd(trip) {
        dispatch({
            type: "ADD_RESERVE",
            trip,
        })
    }

    return (
        <>
            <Container style={{ padding: "0" }}>
                <StyledList>
                    {trips.map((trip) => (
                        <ListItem className="lista" key={trip.id}>
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
                                    onClick={() => handleAdd(trip)}
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
                        </ListItem>
                    ))}
                </StyledList>
            </Container>
        </>
    )
}
