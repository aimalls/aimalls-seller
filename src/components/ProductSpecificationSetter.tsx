import { IonButton, IonLabel, IonIcon, IonModal, IonHeader, IonTitle, IonToolbar, IonContent, IonList, IonItem, IonGrid, IonRow, IonCol, IonInput, IonSelect } from "@ionic/react";
import { chevronForward, chevronDown, key } from "ionicons/icons";
import { FC, useEffect, useMemo, useState } from "react";
import useProductSpecification from "../hooks/useProductSpecifications";
import { iProductCategory } from "../requests/product-category.request";

import "../styles/components/ProductSpecificationSetter.scss"
import { iProductSpecification } from "../requests/product-specification.request";
import { InputInputEventDetail } from "@ionic/core";
import { SpecificationSelectInput } from "./product-specification-setter/SpecificationSelectInput";
import { SpecificationUnitInput } from "./product-specification-setter/SpecificationUnitInput";

interface iProductSpecificationSetterProps {
    productCategory?: iProductCategory,
    onChange: (value: spec) => void
}

type spec = { [key: string]: string }

export const ProductSpecificationSetter: FC<iProductSpecificationSetterProps> = ({ productCategory, onChange }) => {

    const [isSetterOpen, setIsSetterOpen] = useState(false);

    const { productSpecificationByCategory, productSpecificationByCategoryIsLoading, refetchSpecifications } = useProductSpecification(productCategory!);

    const [productSpecificationForm, setProductSpecificationForm] = useState<spec>({})

    useEffect(() => {
        if (productCategory) {
            refetchSpecifications()
        }
    }, [productCategory])
    

    useEffect(() => {
        setProductSpecificationForm({})
        if (productSpecificationByCategory) {
            productSpecificationByCategory.forEach((specification: iProductSpecification) => {
                setProductSpecificationForm((current) => {
                    let curr = {...current};
                    curr[specification.name as keyof typeof curr] = "";
                    return curr
                })
            })
        }
    }, [productSpecificationByCategory])

    const handleSpecificationInputChange = (required: boolean, selfFill: boolean, keyValue?: { key: string, value: string }) => {
        setProductSpecificationForm((current) => {
            let curr = {...current};
            if (keyValue) {
                curr[keyValue?.key as keyof typeof productSpecificationForm] = keyValue?.value;
                return curr
            }
            return curr;
        })
    }

    const setCount = useMemo(() => {
        const obj = Object.keys(productSpecificationForm);
        let count = 0;
        obj.forEach(key => {
            if (productSpecificationForm[key] !== "") {
                count++;
            }
        })

        return count >= 2 ? `${count} Items Set`: `${count} Item Set`;

    }, [productSpecificationForm])

    const onSpecificationDone = () => {
        onChange(productSpecificationForm)
        setIsSetterOpen(false)
    }

    const resetSpecifications = () => {
        setProductSpecificationForm({})
        if (productSpecificationByCategory) {
            productSpecificationByCategory.forEach((specification: iProductSpecification) => {
                setProductSpecificationForm((current) => {
                    let curr = {...current};
                    curr[specification.name as keyof typeof curr] = "";
                    return curr
                })
            })
        }
    }


    return (
        <div id="product-specification-setter">
            <IonButton fill="clear" className="activator" expand="block" onClick={() => setIsSetterOpen(true)} disabled={!productCategory}>
                <IonLabel slot="start" style={{ display: 'flex', alignItems: 'center' }}>
                    Specifications
                </IonLabel>
                { setCount }
                <IonIcon icon={ chevronDown } size="small" slot="end"></IonIcon>
            </IonButton>
            <IonModal isOpen={ isSetterOpen }>
                <IonHeader style={{ boxShadow: 'none' }}>
                    <IonToolbar>
                        <IonButton slot="start" fill="clear" onClick={() =>  resetSpecifications()}>Reset</IonButton>
                        <IonTitle>Set Specifications</IonTitle>
                        <IonButton slot="end" fill="clear" onClick={() => onSpecificationDone()}>Done</IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    { productSpecificationByCategory ? (
                        <IonGrid>
                            <IonRow className="form">
                                { productSpecificationByCategory.map((specification: iProductSpecification) => (
                                    <IonCol size="12" key={specification._id}>
                                        { specification.fieldType == "textInput" ? (
                                            <IonInput
                                                type="text"
                                                required={!!specification.attributes?.includes("Required")}
                                                placeholder={ `Input ${specification.name}` }
                                                fill="solid"
                                                label={ `${specification.name} ${specification.attributes?.includes("Required") ? '*' : ''}` }
                                                labelPlacement="floating"
                                                value={productSpecificationForm[specification.name as keyof typeof productSpecificationForm]}
                                                onIonInput={({ detail }) => 
                                                handleSpecificationInputChange(
                                                    !!specification.attributes?.includes("Required"),
                                                    !!specification.attributes?.includes("Self-Fill"),
                                                    {key: specification.name, value: detail.value!})}
                                            ></IonInput>
                                        ): specification.fieldType == "select" ? (
                                            <SpecificationSelectInput specification={ specification } 
                                            value={productSpecificationForm[specification.name as keyof typeof productSpecificationForm]}
                                            onChange={(e) => handleSpecificationInputChange(
                                                !!specification.attributes?.includes("Required"),
                                                !!specification.attributes?.includes("Self-Fill"),
                                                {key: specification.name, value: e}
                                            
                                            )} />
                                        ): specification.fieldType == "unitInput" ? (
                                            <SpecificationUnitInput specification={specification}
                                                value={productSpecificationForm[specification.name as keyof typeof productSpecificationForm]}
                                                onChange={(e) => handleSpecificationInputChange(
                                                    !!specification.attributes?.includes("Required"),
                                                    !!specification.attributes?.includes("Self-Fill"),
                                                    {key: specification.name, value: e}
                                                
                                                )}
                                            />
                                        ): null }
                                    </IonCol>
                                )) }
                            </IonRow>
                        </IonGrid>
                    ): null }
                </IonContent>
            </IonModal>
        </div>
    )
}

export default ProductSpecificationSetter;