import { ChangeEvent, FC, useRef, useState } from "react";
import { InputCustomEvent, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRow, useIonAlert, useIonLoading } from "@ionic/react";
import { useHistory } from "react-router";
import { image } from "ionicons/icons";
import { compressor, dataURLtoFile } from "../helpers/imageCompressor";
export interface iProps {}
interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

type b64 = {
    index: number,
    image: string
}

export const ImageUpload: FC<iProps> = (props): JSX.Element => {
    const navigation = useHistory();
    const [present, dismiss] = useIonLoading();
    const [presentAlert] = useIonAlert();

    const inputFile = useRef<HTMLInputElement>(null)

    const [compressedFiles, setCompressedFiles] = useState<File[]>([])
    const [compressedFilesThumb, setCompressedFilesThumb] = useState<File[]>([])
    const [compressedFilesThumbB64, setCompressedFilesThumbB64] = useState<string[]>([])

   

    const handleInputFileChange = async (files?: any) => {
        if (!files) {
            return 
        }

        setCompressedFiles([])
        setCompressedFilesThumb([])
        setCompressedFilesThumbB64([])

        const the_files = files.target.files
        
        for (let i = 0; i < the_files.length; i++) {
            await compressor(the_files[i], false, async function (result: any, file_name: any) {

                let image = dataURLtoFile(result, file_name)
                setCompressedFiles(current => {
                    let curr = [...current, image];
                    return curr;
                })

            });

            await compressor(the_files[i], true, async function (result: any, file_name: any) {

                let image = dataURLtoFile(result, file_name)
                setCompressedFilesThumb(current => {
                    let curr = [...current, image];
                    return curr;
                })
                var reader = new FileReader();
                reader.readAsDataURL(image);

                reader.onload = () => {
                    setCompressedFilesThumbB64((current) => {
                        let curr = [...current, reader.result?.toString()!]
                        return curr;
                    })
                }

            });
        }

        
    }

    return (
        <div style={{ display: 'flex' }}>
            { compressedFilesThumbB64.length !== 0 ? (
                compressedFilesThumbB64.map((img, index) => (
                    <img src={img} key={index} style={{ height: '50px', width: '50px', border: "thin solid var(--ion-color-primary)", objectFit: 'contain', marginRight: '5px' }} />
                ))
            ) : null }
            <IonButton fill="clear" className="placeholder-button" onClick={() => inputFile.current?.click()}>
                <IonIcon icon={image} size="large"></IonIcon>
            </IonButton>
            <input ref={inputFile} type="file" className="ion-hide" multiple onChange={(e) => handleInputFileChange(e)} />
        </div>
    )
};
export default ImageUpload;