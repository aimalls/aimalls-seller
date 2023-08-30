import { IonButton, IonCard, IonCardContent, IonCardHeader, IonIcon, IonInput, IonItem, IonTitle, IonToolbar } from "@ionic/react"
import { useState, useEffect, FC } from "react"
import { iVariation, iVariationOption } from "./SalesInformation"
import { close } from "ionicons/icons"
import VariationOption from "./VariationOption"


interface iVariationFormProps {
    variationProp: iVariation,
    onVariationChange: (variation: iVariation) => void,
    index: number,
    onRemove: () => void,
    onOptionAdd: () => void,
}

const VariationForm: FC<iVariationFormProps> = ({variationProp, onVariationChange, index, onRemove, onOptionAdd}) => {

    const [variation, setVariation] = useState<iVariation>(variationProp)
    
    const variationDefault = {
        name: '',
        options: [
            {
                name: '',
                image: null,
                price: null,
                stock: null,
                sku: ''
            }
        ]
    }

    useEffect(() => {
        onVariationChange(variation)
    }, [variation])

    const hanldeVariationChange = <Key extends keyof iVariation>(key: Key, value: iVariation[Key]) => {
        if (variation) {
        
            setVariation(current => {
                let curr = {...current};
                curr[key] = value;
                return curr;
            })
        }
    }

    
    const handleVariationOptionChange = (option: iVariationOption, optionIndex: number) => {
        setVariation(current => {
            let curr = { ...current };
            curr.options[optionIndex] = option;
            return curr;
        })
    }

    const handleOptionRemove = (optionIndex: number) => {

        if (variation.options.length <= 1) {
            setVariation((current) => {
                let curr = {...current };
                let newOptions = [variationDefault.options[0]]
                curr.options = newOptions;
                return curr;
            })
            return
        }

        setVariation(current => {
            let curr = { ...current };
            curr.options = curr.options.filter((v, i) => i !== optionIndex)
            return curr;
        })
    }

    return (
        <IonCard style={{ padding: '0px' }}>
            <IonCardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>Variation {index + 1}</div>
                    <IonButton fill="clear" onClick={onRemove}>
                        <IonIcon icon={ close }></IonIcon>
                    </IonButton>
                </div>
            </IonCardHeader>
            <IonCardContent>
                <IonInput
                    label="Variation Name"
                    labelPlacement="floating"
                    placeholder="Input Variation Name"
                    value={variation.name}
                    fill="solid"
                    onIonChange={({detail}) => hanldeVariationChange("name", detail.value!)}
                ></IonInput>
                {variation.options.map((option, optionIndex) => (
                    <VariationOption 
                        key={`variation-option-${optionIndex}`} 
                        option={option} 
                        index={optionIndex}
                        onOptionRemove={(optionIndex) => handleOptionRemove(optionIndex)}
                        onChange={(option, index) => handleVariationOptionChange(option, index)}
                    />
                ))}
                <IonButton fill="clear" expand="block" onClick={onOptionAdd}>Add More Option</IonButton>
            </IonCardContent>
        </IonCard>
    )
}

export default VariationForm;