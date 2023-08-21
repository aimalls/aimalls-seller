import { Route } from "react-router"
import { AddNewProduct } from "../pages/products/AddNewProduct"

export const ProductRoutes = () => {
    return (
        <>
            <Route path="/products/new">
                <AddNewProduct />
            </Route>
        </>
    )
}