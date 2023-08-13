import { Route } from "react-router"
import { DashboardLayoutV2 } from "../layouts/dashboard/DashboardLayoutV2"
import UserContextProvider from "../contexts/UserContext"

export const PrivateRoutes = () => {
    return (
        <>
            <Route path="/dashboard">
                <UserContextProvider>
                    {/* <DashboardLayout /> */}
                    <DashboardLayoutV2 />
                </UserContextProvider>
            </Route>
        </>
    )
}