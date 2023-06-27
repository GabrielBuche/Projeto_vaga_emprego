import { useContext } from "react"
import { ProductsContext } from "."

export const UseProducts = () => {
    const context = useContext(ProductsContext)

    return context
}