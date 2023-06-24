import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../pages/login'

export default function AuthRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
