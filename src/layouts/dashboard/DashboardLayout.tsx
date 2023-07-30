import { IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { mail, menuOutline } from "ionicons/icons";
import { FC } from "react";
import DashboardRoutes from "../../routes/DashboardRoutes";
import { processLogoutToAPI } from "../../requests/auth.request";
import { useHistory } from "react-router";

export interface iProps {}

export const DashboardLayout: FC<iProps> = (props): JSX.Element => {

    const navigation = useHistory();

    const processLogout = async () => {
        try {
            const logoutRequest = await processLogoutToAPI()
            localStorage.removeItem("authToken")
            navigation.push("/login")

        } catch (err) {
            console.log(err)
        }
    }
    

    return (
        <IonSplitPane id="dashboard-layout" when="md" contentId="dashboard-content">
            <IonMenu contentId='dashboard-content' className='dashboard-navigation-content'>
                <IonList>
                    <IonItem lines="full" routerLink="/dashboard">
                        <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Dashboard</IonLabel>
                    </IonItem>
                    <IonItem lines="full" routerLink="/dashboard/tasks">
                        <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Tasks</IonLabel>
                    </IonItem>
                    <IonItem lines='full' onClick={() => processLogout()}>
                        <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>
                            Log out
                        </IonLabel>
                    </IonItem>
                    <IonButton className='ion-margin-top' fill='solid' shape='round' expand="full" style={{textTransform: "lowercase"}}>
                        <IonIcon slot="start" icon={mail}></IonIcon>
                        support@aimalls.app
                    </IonButton>
                </IonList>
            </IonMenu>
            <IonPage id="dashboard-content">
                <IonRouterOutlet>
                    <DashboardRoutes />
                </IonRouterOutlet>
            </IonPage>
        </IonSplitPane>
    )
};
export default DashboardLayout;