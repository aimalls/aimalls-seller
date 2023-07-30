import { IonPage, IonContent, IonBackButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonGrid, IonCol, IonInput, IonRow, IonButton, IonIcon, useIonAlert, useIonLoading } from "@ionic/react";
import { FC, useState } from "react";
import { eyeOff, eye, arrowForward } from "ionicons/icons";
import "../../styles/pages/auth/Login.scss"
import { iLoginForm, processLoginToAPI } from "../../requests/auth.request";
import { useLocalStorage } from 'usehooks-ts'
import { AxiosResponse } from 'axios'
import { useHistory } from "react-router";

export interface iProps {}
export const Login: FC<iProps> = (props): JSX.Element => {

    
    const [presentAlert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    
    const navigation = useHistory();

    const [loginForm, setLoginForm] = useState<iLoginForm>({
        email: '',
        password: '',
    })
    const [authToken, setAuthToken] = useLocalStorage<string | AxiosResponse>('authToken', '')

    const handleLoginFormChange = (key: string, value: string) => {
        setLoginForm((current) => {
            let curr = {...current};

            curr[key as keyof typeof curr] = value;

            return curr;
        })
    }

    const processLogin = async () => {
        await present();
        try {
            const result = await processLoginToAPI(loginForm.email, loginForm.password)
            setAuthToken(result.data.authToken)
            navigation.push("/dashboard")
        } catch (error: any) {
            presentAlert(error.response.data.error)
        } finally {
            await dismiss();
        }
    }

    return (
        <IonPage id="login">
            <IonContent fullscreen>

                <IonGrid style={{ paddingTop: '100px' }}>
                    <IonRow>
                        <IonCol size="6" className="page-title">
                            Login to your Store
                        </IonCol>
                        <IonCol size="12" className="form">
                            <IonInput
                                type="email"
                                label="Business Email"
                                fill="solid"
                                labelPlacement="floating"
                                value={ loginForm.email }
                                onIonInput={(e) => handleLoginFormChange("email", e.detail.value!)}
                            />

                            <IonInput
                                type="password"
                                label="Password"
                                fill="solid"
                                labelPlacement="floating"
                                value={ loginForm.password }
                                onIonInput={(e) => handleLoginFormChange("password", e.detail.value!)}
                            >
                            </IonInput>
                        </IonCol>
                        <IonCol size="12" style={{ display: 'flex', justifyContent: 'end' }}>
                            <IonButton size="small" fill="clear">Forgot Password?
                                <IonIcon slot="end" icon={ arrowForward }></IonIcon>
                            </IonButton>
                        </IonCol>
                        <IonCol size="12" className="form-button">
                            <IonButton size="large" expand="block" shape="round" onClick={() => processLogin()}>
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