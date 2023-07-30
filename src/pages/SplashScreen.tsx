import { IonBackButton, IonButton, IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import { FC, useEffect } from "react";
import "../styles/pages/SplashScreen.scss"
import AIMallsLogo from "../assets/images/logo.png"
import { useHistory } from "react-router";

export const SplashScreen: FC = () => {

    const navigation = useHistory();

    useEffect(() => {
        setTimeout(() => {
            navigation.push("/dashboard")
        }, 3000)
    }, [])

    return  (
        <IonPage id="splash-screen">
            
            <IonContent fullscreen>
                <div className="container">
                    <img src={ AIMallsLogo } alt="aimalls-logo" />
                </div>
            </IonContent>
        </IonPage>
    )
}