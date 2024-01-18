"use client";

import React, { useState } from 'react';
import Dropdown from '../../Dropdown';
import { Button, NumberInput, Select } from '@mantine/core';
import classes from "./Donate.module.css";

const options = ['EUR', 'USD', 'CAD'];
type donationObj = {
    amount: string,
    currency: string
}

export default function Donate() {
    const [selectedOption, setSelectedOption] = useState('');
    const [textInputValue, setTextInputValue] = useState<string | number>(0);
    
    // const handleClick = async () => {
    //     const data: donationObj = {
    //         amount: textInputValue,
    //         currency: selectedOption
    //     }
    //     const result = await fetch('/api/createCheckoutSession', {
    //         method: 'POST',
    //         body: JSON.stringify(data, null),
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //     })
    //     const url = await result.json();
    //     console.log(url.session.url)
    //     window.location.href = url.session.url;
    // };
    
    const handleSelect = (selectedOption: string) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div>
           <p className="font-medium">Support our cause</p>
           <form>
                <div className="flex flex-col  leading-5 gap-4">
                    <div className="flex flex-col  gap-4 grow">
                        <Select
                            data={["USD", "CAD", "EUR"]}
                            defaultValue="USD"
                            className=""
                            classNames={{
                                input: classes["input-dropdown"]
                            }}
                        />
                        <NumberInput
                            placeholder="5.00"
                            value={textInputValue}
                            onChange={setTextInputValue}
                            hideControls
                            className="grow"
                            classNames={{
                                input: classes["input-donate"]
                            }}
                        />
                    </div>
                    <Button type="submit" className="bg-primary text-sm">
                        Donate 
                    </Button>
                </div>
            </form>
        </div>
    );
};