import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import styleScanner from './QrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants.js'


export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        const updatedData = [...prevData, result[0].rawValue];
        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify(updatedData));
    };

    return (
        <div className={styleScanner.container}>
            <p>{scanned}</p>
            <Scanner
                onScan={scanHandler}
                allowMultiple
                components={{
                    audio: false,
                    finder: false,
                }}
                styles={{
                    container: { width: 350 }
                }}
            />
            <p className={styleScanner.result}>{scanned}</p>
        </div>
    )
}