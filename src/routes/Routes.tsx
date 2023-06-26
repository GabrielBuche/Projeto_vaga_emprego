import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RegisterBudget from '../pages/registerBudget'
import Budget from '../pages/budget'
import Login from '../pages/login'

export default function AuthRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/budget' element={<Budget />} />
                <Route path='/registerBudget' element={<RegisterBudget />} />
                <Route index element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
