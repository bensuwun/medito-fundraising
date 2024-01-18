"use client";

import React, { useState } from 'react';
import Dropdown from '../../Dropdown';
import { Button, NumberInput, Select} from '@mantine/core';
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
        <div className="border-2 p-4 flex justify-center gap-2 rounded-md">
           <form>
                <div className="flex leading-5 gap-4">
                    <div className="flex ">
                        <Select
                            data={["USD", "CAD", "EUR"]}
                            defaultValue="USD"
                            className="w-20 z-10 relative rounded-r-none"
                            classNames={{
                                input: classes["input-dropdown"]
                            }}
                        />
                        <NumberInput
                            placeholder="5.00"
                            value={textInputValue}
                            onChange={setTextInputValue}
                            hideControls
                            className="relative focus:z-20"
                            classNames={{
                                input: classes["input-donate"]
                            }}
                        />
                    </div>
                    <Button type="submit" className="bg-primary">
                        Donate 
                    </Button>
                </div>
            </form>
        </div>
    );
};