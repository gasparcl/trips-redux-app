import React from "react"
import { BrowserRouter } from "react-router-dom"

import RoutesApp from "./routes"

import Header from "./components/Header"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <RoutesApp />
        </BrowserRouter>
    )
}
