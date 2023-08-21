import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { FC } from "react";
import "../../styles/pages/products/AddNewProduct.scss"

export const AddNewProduct: FC = () => {
    return (
        <IonPage id="add-new-product">
            <IonHeader>
                <IonToolbar>
                    <IonButtons style={{ position: 'fixed', top: '0', left: '0', height: '100%' }}>
                        <IonBackButton defaultHref="/products"></IonBackButton>
                    </IonButtons>
                    <IonTitle className="ion-text-center">Add New Product</IonTitle>

                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className="form ion-padding">

                    <IonCardTitle>Product Image (1/8)</IonCardTitle>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonImg></IonImg>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}