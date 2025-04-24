import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth'
import Home from '../pages/Home'

function RouterConfig() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default RouterConfig