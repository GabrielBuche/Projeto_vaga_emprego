import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RegisterBudget from '../pages/registerBudget'
import  Budget  from '../pages/budget'

export default function AuthRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  element={<Budget />} />
                <Route index element={<RegisterBudget/>} />
            </Routes>
        </BrowserRouter>
    )
}
