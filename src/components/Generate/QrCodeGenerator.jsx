import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import styleGenerator from './qrCodeGenerator.module.css';
import { GENERATE_DATA } from '../../constants.js'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');


    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        const updatedData = [...prevData, value];
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify(updatedData));
        setResult(value);
        setValue('')
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }

    return (
        <div className={styleGenerator.container}>

            <input className={styleGenerator.input}
                   placeholder='Введите текст...'
                   type='text'
                   value={value}
                   onChange={onChangeHandler}/>

            <button type='button'
                    onClick={onClickHandler}
                    className={styleGenerator.button}>
                Сгенерировать QR
            </button>

            {result !== '' && (
                <div className={styleGenerator.qrWrapper}>
                    <QRCodeSVG value={result} size={200}/>
                </div>
            )
            }

        </div>
    )
}

