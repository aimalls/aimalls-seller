import { Route } from "react-router"
import { DashboardLayout } from "../layouts/dashboard/DashboardLayout"
import UserContextProvider from "../contexts/UserContext"

export const PrivateRoutes = () => {
    return (
        <>
            <Route path="/dashboard">
                <UserContextProvider>
                    <DashboardLayout />
                </UserContextProvider>
            </Route>
        </>
    )
}