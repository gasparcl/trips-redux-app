import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Link as StyledLink, Typography } from "@material-ui/core"
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md"
import "./style.css"
import Link from "../styles"

import {
    deleteReserve,
    updateReserveAmountRequest
} from "../../store/modules/reserves/actions"
import { StyledButton, StyledTypography } from "./styles"
import PageTransition from "../../components/PageTransition"
import { StyledContainer } from "../styles"
import DeleteConfirmation from "../../components/Modals/DeleteConfirmation"

export default function Reservas() {
    // === HOOKS ===
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const reserves = useSelector((state) => state.reserves)
    const reservesSize = useSelector((state) => state.reserves.length)
    const dispatch = useDispatch()

    // === HANDLERS ===
    const decrementAmount = (trip) => {
        dispatch(updateReserveAmountRequest(trip.id, trip.amount - 1))
    }

    const incrementAmount = (trip) => {
        dispatch(updateReserveAmountRequest(trip.id, trip.amount + 1))
    }

    const handleDelete = (id) => {
        dispatch(deleteReserve(id))
        setOpenDeleteModal(false)
    }

    const handleOpenDeleteModal = () => {
        setOpenDeleteModal(true)
    }
    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false)
    }

    return (
        <PageTransition>
            <StyledContainer>
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
                        <Link to="/">
                            <StyledLink underline="hover" color="initial">
                                <StyledTypography variant="body1">
                                    Voltar
                                </StyledTypography>
                            </StyledLink>
                        </Link>
                    </>
                )}
                <ul>
                    {(reserves || []).map((reserve) => (
                        <>
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
                                        onClick={handleOpenDeleteModal}
                                    >
                                        <MdDelete size={20} color="#ff0000" />
                                    </StyledButton>
                                    <DeleteConfirmation
                                        open={openDeleteModal}
                                        close={handleCloseDeleteModal}
                                        onConfirm={() =>
                                            handleDelete(reserve.id)
                                        }
                                    />
                                </div>
                            </li>
                        </>
                    ))}
                </ul>
            </StyledContainer>
        </PageTransition>
    )
}
