import { IonPage, IonContent, IonBackButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonGrid, IonCol, IonInput, IonRow, IonButton, IonIcon } from "@ionic/react";
import { FC } from "react";
import { eyeOff, eye, arrowForward } from "ionicons/icons";
import "../../styles/pages/auth/Login.scss"

export interface iProps {}
export const Login: FC<iProps> = (props): JSX.Element => {
    return (
        <IonPage id="login">
            <IonHeader style={{ boxShadow: 'none' }}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonGrid>
                    <IonRow>
                        <IonCol size="6" className="page-title">
                            Login to your Store
                        </IonCol>
                        <IonCol size="12" className="form">
                            <IonInput
                                type="email"
                                label="Business Email"
                                fill="outline"
                            />

                            <IonInput
                                type="password"
                                label="Password"
                                fill="outline"
                                labelPlacement="floating"
                            >
                            </IonInput>
                        </IonCol>
                        <IonCol size="12" style={{ display: 'flex', justifyContent: 'end' }}>
                            <IonButton size="small" fill="clear">Forgot Password?
                                <IonIcon slot="end" icon={ arrowForward }></IonIcon>
                            </IonButton>
                        </IonCol>
                        <IonCol size="12" className="form-button">
                            <IonButton size="large" expand="block" shape="round">
                                <span slot="">Open Store</span>
                            </IonButton>
                        </IonCol>
                        <IonCol size="12" className="form-button">
                            <div style={{ textAlign: 'center', margin: '10px 0px' }}>Don't have store yet? Create now!</div>
                            <IonButton size="large" expand="block" shape="round" routerLink="/register">
                                <span slot="">Create Store</span>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};
export default Login;