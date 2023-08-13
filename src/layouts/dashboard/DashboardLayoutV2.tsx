import { FC } from "react";
import { IonAvatar, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonPage, IonRouterOutlet, IonRow, IonSplitPane, IonTabBar, IonTabButton, useIonAlert, useIonLoading } from "@ionic/react";
import { useHistory } from "react-router";
import DashboardRoutes from "../../routes/DashboardRoutes";
import { home, statsChart, timerOutline, personCircleOutline, bagHandleOutline, heartOutline, homeOutline, logOutOutline, peopleOutline, receiptOutline } from "ionicons/icons";

import avatar from '../../assets/images/attractive-cheerful-silly-blond-asian-girl-pointing-down-index-finger-look-camera-happy-optimistic-smile-propose-good-recommendation-standing-white-wall.jpg'
import { processLogoutToAPI } from "../../requests/auth.request";

import "../../styles/layouts/DashboardLayoutV2.scss"

export interface iProps {}


export const DashboardLayoutV2: FC<iProps> = (props): JSX.Element => {
    const navigation = useHistory();
    const [present, dismiss] = useIonLoading();
    const [presentAlert] = useIonAlert();



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
        <IonSplitPane  when="md" contentId="dashboard-content" id="dashboard-layout">
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
                <IonContent>
                    <IonRouterOutlet>
                        <DashboardRoutes />
                    </IonRouterOutlet>
                </IonContent>
                <IonFooter id="dashboard-tab-menu">
                    <IonTabBar slot="bottom" >
                        <IonTabButton tab="dashboard" href="/dashboard" style={{ background: 'transparent' }}>
                            <IonIcon icon={home} size="large" />
                            <div className="d1"></div>
                            <div className="d2"></div>
                        </IonTabButton>

                        <IonTabButton tab="stats" href="/stats" style={{ background: 'transparent' }}>
                            <IonIcon icon={statsChart} size="large" />
                            {/* <IonLabel>Stats</IonLabel> */}
                        </IonTabButton>

                        <IonTabButton tab="transactions" href="/transactions" style={{ background: 'transparent' }}>
                            <IonIcon icon={timerOutline} size="large" />
                            {/* <IonLabel>Transactions</IonLabel> */}
                        </IonTabButton>
                        <IonTabButton tab="account" href="/account" style={{ background: 'transparent' }}>
                            <IonIcon icon={personCircleOutline} size="large" />
                            {/* <IonLabel>Account</IonLabel> */}
                        </IonTabButton>
                    </IonTabBar>
                </IonFooter>
            </IonPage>
        </IonSplitPane>
    )
};
export default DashboardLayoutV2;