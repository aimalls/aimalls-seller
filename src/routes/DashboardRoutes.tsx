import { FC } from "react";
import { Route } from "react-router";
import Dashboard from "../pages/dashboard/Dashboard";

export interface iProps {}
export const DashboardRoutes: FC<iProps> = (props): JSX.Element => {
    return (
        <>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </>
    )
};
export default DashboardRoutes;