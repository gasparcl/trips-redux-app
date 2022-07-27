import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import RoutesApp from "./routes"
import Header from "./components/Header"

import store from "./store"
import Footer from "./components/Footer"

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <RoutesApp />
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}
