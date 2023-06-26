import { useContext } from "react"
import { AuthContext } from "."

export const UseProducts = () => {
    const context = useContext(AuthContext)

    return context
}