"use client";

import React, { useState } from 'react';
import { Button, NumberInput, Select } from '@mantine/core';
import classes from "./Donate.module.css";
import currency from '../../../helpers/currency.json'
import { useForm } from '@mantine/form';

type donationObj = {
    amount: number | string,
    currency: string
}

export default function Donate() {
    const [selectedOption, setSelectedOption] = useState('');
    const [numberInputValue, setNumberInputValue] = useState<number | string>('');
    
    const form = useForm({
        validateInputOnBlur : true,
        initialValues: { currency: 'USD', amount: 0},
    
        // functions will be used to validate values at corresponding key
        validate: {
            currency: (value) => (value.length == 3 ? null : 'Select a currency' ),
            amount: (value) => (/^\d{0,5}$/.test(value.toString()) ? null : 'Enter a positive amount up to 5 digits'),
        }
      });
      
    const handleClick = async () => {
        if (form.values.amount > 0) {
            const data: donationObj = {
                amount: form.values.amount,
                currency: form.values.currency
            }
            console.log(data)
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
        }
    };

    return (
        <div>
            <p className="font-medium">Support our cause</p>
            <form onSubmit={form.onSubmit(() => handleClick())}>
                <div className="flex flex-col  leading-5 gap-4">
                    <div className="flex flex-col  gap-4 grow">
                        <Select
                            data={currency}
                            defaultValue="USD"
                            className=""
                            classNames={{
                                input: classes["input-dropdown"]
                            }}
                            {...form.getInputProps('currency')}
                        />
                        <NumberInput
                            min={0}
                            placeholder="5.00"
                            // onChange={handleInputChange}
                            hideControls
                            className="grow"
                            classNames={{
                                input: classes["input-donate"]
                            }}
                            onBlur={() => { form.validateField('amount')}}
                            {...form.getInputProps('amount')}
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