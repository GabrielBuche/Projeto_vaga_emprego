
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterBudget from '../pages/registerBudget'
import Budget from '../pages/budget'
import Login from '../pages/login'

import AuthRoutes from './authRoutes'

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/budget' element={
                    <AuthRoutes >
                        <Budget />
                    </AuthRoutes>

                } />
                <Route path='/registerBudget' element={
                    <AuthRoutes>
                        <RegisterBudget />
                    </AuthRoutes>
                }
                />

                <Route
                    index
                    path='/'
                    element={
                        <Login />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
