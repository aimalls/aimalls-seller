import { FC, useEffect, useState } from "react"
import "../../../styles/pages/products/components/SalesInformation.scss"
import { IonButton, IonLabel, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonItem, IonToggle, IonInput } from "@ionic/react"
import { chevronDown } from "ionicons/icons"


interface iSalesInformationProps {

}

export const SalesInformation: FC<iSalesInformationProps> = () => {

    const [isSalesInfoDialogOpen, setIsSalesInfoDialogOpen] = useState(false);
    const [variationsEnabled, setVariationsEnabled] = useState(false);
    const [wholeSalePriceEnabled, setWholeSalePriceEnabled] = useState(false);

    return (
        <div id="sales-information">
            <IonButton fill="clear" className="activator" expand="block" onClick={() => setIsSalesInfoDialogOpen(true)}>
                <IonLabel slot="start" style={{ display: 'flex', alignItems: 'center' }}>
                    Sales Info.
                </IonLabel>
                <IonIcon icon={ chevronDown } size="small" slot="end"></IonIcon>
            </IonButton>
            <IonModal isOpen={ isSalesInfoDialogOpen }>
                <IonHeader style={{ boxShadow: 'none' }}>
                    <IonToolbar>
                        <IonButton slot="start" fill="clear" onClick={() => {}}>Reset</IonButton>
                        <IonTitle>Set Specifications</IonTitle>
                        <IonButton slot="end" fill="clear" onClick={() => {}}>Done</IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12">
                                <IonItem lines="none">
                                    <IonToggle checked={variationsEnabled} onIonChange={({detail}) => setVariationsEnabled(detail.checked)}>Enable Variations</IonToggle>
                                </IonItem>
                            </IonCol>

                            
                                { variationsEnabled ? (
                                    <IonCol size="12">
                                        <IonItem lines="none">
                                            ads
                                        </IonItem>
                                    </IonCol>
                                ): (
                                    <IonCol>
                                        <IonInput
                                            type="number"
                                            label="Price *"
                                            labelPlacement="floating"
                                            fill="solid"
                                            style={{ marginBottom: '10px' }}
                                        ></IonInput>
                                        <IonInput
                                            type="number"
                                            label="Stock *"
                                            labelPlacement="floating"
                                            fill="solid"
                                        ></IonInput>
                                    
                                    </IonCol>
                                ) }

                            <IonCol size="12">
                                <IonItem lines="none">
                                    <IonToggle checked={wholeSalePriceEnabled} onIonChange={({detail}) => setWholeSalePriceEnabled(detail.checked)}>Whole Sale Price</IonToggle>
                                </IonItem>
                            </IonCol>

                            { wholeSalePriceEnabled ? (
                                <IonCol size="12">
                                    asd
                                </IonCol>
                            ) : null}
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>
        </div>
    )
}