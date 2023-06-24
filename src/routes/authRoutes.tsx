import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../pages/login'
import  Home  from '../pages/budget'

export default function AuthRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
