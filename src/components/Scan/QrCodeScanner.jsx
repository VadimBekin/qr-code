import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import styleScanner from './QrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants.js'


export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        if (!result) return;
        const prevData = JSON.parse(
            localStorage.getItem(SCAN_DATA) || '[]');
        if (prevData.includes(result.text)) return;

        setScanned(result.text);
        const updatedData = [...prevData, result.text];
        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify(updatedData));
    };

    return (
        <div className={styleScanner.container}>
            <p>{scanned}</p>
            <Scanner
                scanDelay={2000}
                onScan={scanHandler}
                allowMultiple
                components={{
                    audio: false,
                    finder: false,
                }}
                styles={{
                    container: { width: 450 }
                }}
            />
            <p className={styleScanner.result}>{scanned}</p>
        </div>
    )
}