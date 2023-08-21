import { FC } from "react";
import { Route } from "react-router";
import DashboardV2 from "../pages/dashboard/DashboardV2";

export interface iProps { }
export const DashboardRoutes: FC<iProps> = (props): JSX.Element => {
    return (
        <>
            <Route exact path="/dashboard">
                <DashboardV2 />
            </Route>
        </>
    )
};
export default DashboardRoutes;