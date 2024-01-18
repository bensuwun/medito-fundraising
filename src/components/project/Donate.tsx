"use client";

import React, { ChangeEvent, useState } from 'react';
import Dropdown from '../Dropdown';
import { Button, TextInput } from '@mantine/core';
import '@mantine/core/styles.css';
import currency from '../../helpers/currency.json'

const options = currency
type donationObj = {
    amount: string,
    currency: string
}

export default function Donate() {
    const [selectedOption, setSelectedOption] = useState('');
    const [textInputValue, setTextInputValue] = useState('');

    const handleClick = async () => {
        if (parseFloat(textInputValue) > 0.50 && selectedOption.length == 3) {
            const data: donationObj = {
                amount: textInputValue,
                currency: selectedOption
            }
            const result = await fetch('/api/createCheckoutSession', {
                method: 'POST',
                body: JSON.stringify(data, null),
                headers: {
                    'content-type': 'application/json',
                },
            })
            const url = await result.json();
            console.log(url.session.url)
            window.location.href = url.session.url
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newInputValue = event.target.value;
        
        // Check if the input is a positive integer
        if (/^\d*\.?\d{0,2}$/.test(newInputValue)) {
            setTextInputValue(newInputValue);
        }
    };
    
    const handleSelect = (selectedOption: string) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className="border-2 p-4 flex flex-col gap-2 rounded-md">
            <div className="flex justify-between gap-6 leading-5">
                <p className="h-full font-bold">Currency</p>
                <p className="h-full font-bold">Minimum of 0.5 USD</p>
                <Button onClick={handleClick}>Donate</Button>
            </div>
            <div className="flex justify-between gap-6 leading-5">
                <Dropdown options={options} onSelect={handleSelect} />
                <TextInput
                    placeholder="5.00"
                    value={textInputValue}
                    onChange={handleInputChange}
                />
                
                <p className="h-full font-bold">ahhh</p>
            </div>
        </div>
    );
};