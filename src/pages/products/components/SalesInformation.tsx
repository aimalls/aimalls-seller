import { FC, useCallback, useEffect, useState } from "react"
import "../../../styles/pages/products/components/SalesInformation.scss"
import { IonButton, IonLabel, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonItem, IonToggle, IonInput } from "@ionic/react"
import { chevronDown } from "ionicons/icons"
import VariationForm from "./ProductVariationForm"


interface iSalesInformationProps {

}

export interface iVariation {
    id: string,
    name: string,
    options: iVariationOption[],
}

export interface iVariationOption {
    id: string,
    name: string
    image: File | null,
    price: string | null,
    stock: string | null,
    sku: string
}

export const SalesInformation: FC<iSalesInformationProps> = () => {

    const [isSalesInfoDialogOpen, setIsSalesInfoDialogOpen] = useState(false);
    const [variationsEnabled, setVariationsEnabled] = useState(false);
    const [wholeSalePriceEnabled, setWholeSalePriceEnabled] = useState(false);

    const [variations, setVariations] = useState<iVariation[]>([])

    const makeid = (length: number) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const variationDefault = {
        id: makeid(5),
        name: '',
        options: [
            {
                id: makeid(7),
                name: '',
                image: null,
                price: null,
                stock: null,
                sku: ''
            }
        ]
    }
    
    useEffect(() => {
        if (variationsEnabled) {
            setVariations(current => {
                return [
                    variationDefault
                ];
            })
        } else {
            setVariations([])
        }
    }, [variationsEnabled])


    const handleAddMoreVariation = () => {
        setVariations(current => {
            return [...current, variationDefault]
            
        })
    }

    const handleRemoveVariation = (variationIndex: number) => {
        const newVariation = variations.filter((v, i) => i !== variationIndex);
        setVariations((current) => {
            if (newVariation.length !== 0) {
                return newVariation;
            } else {
                return [variationDefault]
            }
        })
    }

    


    const handleVariationOptionAdd = useCallback((index: number) => {
        setVariations((current) => {
            let curr = [...current];
            let currentOptions = current[index].options;
            const newOption = {
                    id: makeid(7),
                    name: '',
                    image: null,
                    price: null,
                    stock: null,
                    sku: ''
            }
            let newOptions = [...currentOptions, newOption]
            
            curr[index].options = newOptions;
            return curr;
        })
    }, []);

    const handleVariationOptionRemove = (variationIndex: number, optionId: string) => {

        if (variations[variationIndex].options.length <= 1) {
            const newOption = {
                id: makeid(7),
                name: '',
                image: null,
                price: null,
                stock: null,
                sku: ''
            }
            setVariations((current) => {
                let curr = [...current ];
                let newOptions = [newOption]
                curr[variationIndex].options = newOptions;
                return curr;
            })
            return
        }

        

        let newOptions = variations[variationIndex].options.filter((v, i) => v.id !== optionId)
        setVariations(current => {
            let curr = [...current ];
            curr[variationIndex].options = newOptions;
            return curr;
        })

        
        // if (variations[variationIndex].options.length <= 1) {
        //     setVariations((current) => {
        //         let curr = [...current];
        //         let newOptions = [variationDefault.options[0]]
        //         curr[variationIndex].options = newOptions;
        //         return curr;
        //     })
        //     return
        // }

        // setVariations((current) => {
        //     let curr = [...current];
        //     curr[variationIndex].options.splice(optionIndex, 1);
        //     return curr;
        // })
    }

    const handleVariationChange = (variation: iVariation, variationIndex: number) => {
        setVariations((current) => {
            let curr = [...current];
            curr[variationIndex] = variation;
            return curr;
        })
    }

    
    

    

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
                                    <IonToggle 
                                        checked={variationsEnabled} 
                                        onIonChange={({detail}) => 
                                        setVariationsEnabled(detail.checked)}
                                    >Enable Variations
                                    </IonToggle>
                                </IonItem>
                            </IonCol>

                            
                                { variationsEnabled ? (
                                    <IonCol size="12">
                                        
                                        { variations.map((variation, index) => (
                                            <div key={`variation-${variation.id}`}>
                                                <VariationForm 
                                                    variationProp={variation} 
                                                    onVariationChange={(variation) => handleVariationChange(variation, index)} 
                                                    index={index}
                                                    onRemove={() => handleRemoveVariation(index)}
                                                    onOptionAdd={() => handleVariationOptionAdd(index)}
                                                    onOptionRemove={(optionId) => handleVariationOptionRemove(index, optionId)}
                                                />
                                            </div>
                                        )) }
                                        <IonButton fill="clear" expand="block"
                                            onClick={() => handleAddMoreVariation()}
                                        >Add More Variation</IonButton>
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