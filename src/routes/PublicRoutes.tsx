import { Route, useHistory } from "react-router"
import { SplashScreen } from "../pages/SplashScreen"


export const PublicRoutes = () => {
    
    return(
        
        <>
            <Route exact path="/">
                <SplashScreen />
            </Route>
        </>
        
    )
}
