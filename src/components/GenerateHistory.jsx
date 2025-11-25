import {GENERATE_DATA} from '../constants.js'
import { QRCodeSVG } from "qrcode.react";

export const GenerateHistory = () => {

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    return (
        <div>
            {data.map((text) => (
                <p key={text}>
                    {text}
                    <QRCodeSVG value={text} size={100}/>
                </p>

                
            ))}
        </div>
    )
}