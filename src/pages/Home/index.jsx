import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addReserveRequest } from "../../store/modules/reserves/actions"

import api from "../../services/api"

import PageTransition from "../../components/PageTransition"
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@material-ui/core"
import { StyledGrid } from "./styles"
import { StyledContainer } from "../styles"
import { MdFlightTakeoff } from "react-icons/md"

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
        <PageTransition>
            <StyledContainer>
                <StyledGrid container spacing={2}>
                    {(trips || []).map((trip) => (
                        <Grid
                            item
                            sm={4}
                            xs={12}
                            className="lista"
                            key={trip.id}
                        >
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="trip-img"
                                        image={trip.image}
                                        title={trip.title}
                                    />
                                    <CardContent>
                                        <Typography variant="body1">
                                            {trip.title}
                                        </Typography>
                                        <Typography variant="caption">
                                            Status:{" "}
                                            {trip.status
                                                ? "Disponível"
                                                : "Indisponível"}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleAdd(trip.id)}
                                        className="mt-2"
                                        startIcon={
                                            <MdFlightTakeoff
                                                size={18}
                                                color="#3F51B5"
                                            />
                                        }
                                    >
                                        Reservar!
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </StyledGrid>
            </StyledContainer>
        </PageTransition>
    )
}
