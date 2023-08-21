import { IonContent, IonPage, IonRouterOutlet } from "@ionic/react";
import { FC } from "react";
import { ProductRoutes } from "../../routes/ProductRoutes";

export const ProductPageLayout: FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonRouterOutlet>
                    <ProductRoutes />
                </IonRouterOutlet>
            </IonContent>
        </IonPage>
    )
}