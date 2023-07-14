import { IonContent, IonPage } from "@ionic/react";
import { FC } from "react";
import "../styles/pages/SplashScreen.scss"
import AIMallsLogo from "../assets/images/logo.png"

export const SplashScreen: FC = () => {
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