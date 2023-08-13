import { IonAvatar, IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonMenuToggle, IonPage, IonTabBar, IonTabButton, IonTitle, IonToolbar } from "@ionic/react";
import { apps, home, library, logoMicrosoft, menuOutline, personCircle, personCircleOutline, playCircle, radio, search, statsChart, timerOutline } from "ionicons/icons";
import { FC } from "react";
import "../../styles/pages/dashboard/Dashboard.scss"
export interface iProps {}
export const Dashboard: FC<iProps> = (props): JSX.Element => {
    return (
        <IonPage id="dashboard">
            <IonHeader style={{ background: 'none', boxShadow: 'none' }}>
                <IonToolbar style={{height: "70px", display: "flex", padding: '0px 10px'}}>
                    <IonMenuToggle slot='start' >
                        <IonButton fill='clear' color={"dark"} size="large">
                            <IonIcon slot='icon-only' icon={logoMicrosoft}></IonIcon>
                        </IonButton>
                    </IonMenuToggle>
                    <IonTitle className="ion-text-center" style={{ fontWeight: 'bold' }}>Welcome Back!</IonTitle>
                    <IonAvatar slot="end">
                        <img src="https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/323707583_908408890149988_7924239194292652015_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHT8_Qs1HGe0lC1C_9MHywGsN0x6FblLO-w3THoVuUs73NHqmVNnv48wUWNXC2UA6k&_nc_ohc=uO_bb-WAOawAX_tH06x&_nc_ht=scontent.fcrk2-1.fna&oh=00_AfA3EMtnvJAbiuGoKWcl5PMnw-AgyK1GY7AFbSvHrKSMMw&oe=64CB4714" className='avatar'/>
                    </IonAvatar>
                </IonToolbar>
            </IonHeader>
            
            <IonContent fullscreen>
                Dashboard Content Here..
            </IonContent>
            
            <IonFooter>
                <IonTabBar slot="bottom" style={{ background: "#1E110E"}}>
                    <IonTabButton tab="dashboard" href="/dashboard" style={{ background: 'transparent' }}>
                        <IonIcon icon={home} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="stats" href="/stats" style={{ background: 'transparent' }}>
                        <IonIcon icon={statsChart} />
                        <IonLabel>Stats</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="transactions" href="/transactions" style={{ background: 'transparent' }}>
                        <IonIcon icon={timerOutline} />
                        <IonLabel>Transactions</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="account" href="/account" style={{ background: 'transparent' }}>
                        <IonIcon icon={personCircleOutline} />
                        <IonLabel>Account</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonFooter>
        </IonPage>
            
    )
};
export default Dashboard;