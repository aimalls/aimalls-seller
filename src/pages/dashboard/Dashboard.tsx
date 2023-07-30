import { IonButton, IonContent, IonHeader, IonIcon, IonMenuToggle, IonTitle, IonToolbar } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { FC } from "react";

export interface iProps {}
export const Dashboard: FC<iProps> = (props): JSX.Element => {
    return (
        <div id="dashboard">
            <IonHeader>
                <IonToolbar style={{height: "70px", display: "flex", padding: '0px 10px'}} color="dark">
                    <IonMenuToggle slot='start' >
                        <IonButton fill='solid' color={"primary"}>
                            <IonIcon slot='icon-only' icon={menuOutline}></IonIcon>
                        </IonButton>
                    </IonMenuToggle>
                    <IonTitle slot="end">
                        PornHub
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent fullscreen>
                asdadasd
            </IonContent>
            
        </div>
            
    )
};
export default Dashboard;