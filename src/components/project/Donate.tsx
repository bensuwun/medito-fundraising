"use client";

import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import { Button, TextInput } from '@mantine/core';
import '@mantine/core/styles.css';

const options = ['EUR', 'USD', 'CAD'];
type donationObj = {
    amount: string,
    currency: string
}

export default function Donate() {
    const [selectedOption, setSelectedOption] = useState('');
    const [textInputValue, setTextInputValue] = useState('');
    
    const handleClick = async () => {
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
        window.location.href = url.session.url;
    };
    
    const handleSelect = (selectedOption: string) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className="border-2 p-4 flex flex-col gap-2 rounded-md">
            <div className="flex justify-between gap-6 leading-5">
                <p className="h-full font-bold">Currency</p>
                <TextInput
                    placeholder="5.00"
                    value={textInputValue}
                    onChange={(event) => setTextInputValue(event.currentTarget.value)}
                />
                <Button onClick={handleClick}>Donate</Button>
            </div>
            <Dropdown options={options} onSelect={handleSelect} />
        </div>
    );
};