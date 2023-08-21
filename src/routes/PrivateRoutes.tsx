import { Route } from "react-router"
import { DashboardLayoutV2 } from "../layouts/dashboard/DashboardLayoutV2"
import UserContextProvider from "../contexts/UserContext"
import { ProductRoutes } from "./ProductRoutes"
import { ProductPageLayout } from "../layouts/product/ProductPageLayout"

export const PrivateRoutes = () => {
    return (
        <>
            <Route path="/dashboard">
                <UserContextProvider>
                    {/* <DashboardLayout /> */}
                    <DashboardLayoutV2 />
                </UserContextProvider>
            </Route>
            <Route path="/products">
                <ProductPageLayout />
            </Route>
        </>
    )
}