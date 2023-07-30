import { IonAvatar, IonButton, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTabBar, IonTabButton, IonTitle, IonToolbar } from "@ionic/react";
import { bagHandleOutline, heartOutline, home, homeOutline, logOutOutline, mail, menuOutline, peopleOutline, personCircleOutline, receiptOutline, statsChart, timerOutline } from "ionicons/icons";
import { FC } from "react";
import DashboardRoutes from "../../routes/DashboardRoutes";
import { processLogoutToAPI } from "../../requests/auth.request";
import { useHistory } from "react-router";
import '../../styles/pages/dashboard/DashboardLayout.scss'

import avatar from '../../assets/images/attractive-cheerful-silly-blond-asian-girl-pointing-down-index-finger-look-camera-happy-optimistic-smile-propose-good-recommendation-standing-white-wall.jpg'

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
        <div id="dashboard-layout">
            <IonSplitPane  when="md" contentId="dashboard-content">
                <IonMenu contentId='dashboard-content' className='dashboard-navigation-content'>
                    <IonList  style={{ background: 'none' }} lines='none' id="dashboard-list-menu">
                        <IonAvatar>
                            <img src={avatar} alt="avatar" height={80} width={80} style={{borderRadius: "15px"}} />
                        </IonAvatar>
                        <div style={{paddingBottom: "50px"}}>
                            <div style={{ fontSize: "15px", color: "#fff", padding: "10px 0", fontFamily: "Poppins-Regular" }}>Hello,</div>
                            <div style={{ fontSize: "15px", color: "#fff",fontFamily: "Poppins-Regular" }}>AI Malls</div>
                        </div>
                        <IonItem lines="none" routerLink="/dashboard" className={ navigation.location.pathname == "/dashboard" ? "active" : ""}>
                            <IonIcon color={'primary'} icon={homeOutline} slot="start"></IonIcon>
                            <IonLabel color={'light'} className='dashboard-navigation-link'>Dashboard</IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon color={'primary'} icon={personCircleOutline} slot="start"></IonIcon>
                            <IonLabel color={'light'} className='dashboard-navigation-link'>Profile</IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon color={'primary'} icon={bagHandleOutline} slot="start"></IonIcon>
                            <IonLabel color={'light'} className='dashboard-navigation-link'>My Bag</IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon color={'primary'} icon={heartOutline} slot="start"></IonIcon>
                            <IonLabel color={'light'} className='dashboard-navigation-link'>Favorites</IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon color={'primary'} icon={receiptOutline} slot="start"></IonIcon>
                            <IonLabel color={'light'} className='dashboard-navigation-link'>Orders</IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon color={'primary'} icon={peopleOutline} slot="start"></IonIcon>
                            <IonLabel color={'light'} className='dashboard-navigation-link'>Start Selling</IonLabel>
                        </IonItem>

                        <div  style={{ borderTop: "1px solid #f3f3f3", margin: "20px 20px 40px 20px" }}></div>
                        <IonItem lines='none' onClick={() => processLogout()}>
                            <IonIcon color={'primary'} icon={logOutOutline} slot="start"></IonIcon>
                            <IonLabel slot='start' color={'light'} className='dashboard-navigation-link'>
                                Log out
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </IonMenu>
                <IonPage id="dashboard-content">
                    <IonRouterOutlet>
                        <DashboardRoutes />
                    </IonRouterOutlet>
                </IonPage>
            </IonSplitPane>
        </div>
    )
};
export default DashboardLayout;