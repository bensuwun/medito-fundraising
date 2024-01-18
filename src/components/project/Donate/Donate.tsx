"use client";

import { Button, NumberInput, Select } from '@mantine/core';
import classes from "./Donate.module.css";
import { CURRENCY } from '@/helpers/currencies';
import { useForm, isInRange } from '@mantine/form';
import { DonationType } from "@/types/Types";
import { createCheckoutSession } from '@/helpers/requests';

export default function Donate() {
    const form = useForm({
        validateInputOnBlur : true,
        initialValues: { 
            name: "Anonymous",
            currency: 'USD', 
            amount: 1
        },
        // functions will be used to validate values at corresponding key
        validate: {
            currency: (value) => (value.length == 3 ? null : 'Select a currency' ),
            amount: (value) => 
                !/^\d{0,5}$/.test(value.toString()) 
                ? 'Enter a positive amount up to 5 digits.' 
                : value >= 1 && value <= 99999
                ? null
                : "Amount must be between 1 and 99999."
        }
      });
      
    const handleClick = async () => {
        if (form.values.amount > 0) {
            const data: DonationType = {
                name: form.values.name,
                amount: form.values.amount,
                currency: form.values.currency
            }
            const result = await createCheckoutSession(data);
            
            const url = await result.json();
            console.log(url.session.url)
            window.location.href = url.session.url;
        }
    };

    return (
        <div>
            <p className="font-medium">Support our cause</p>
            <form onSubmit={form.onSubmit(async () => handleClick())}>
                <div className="flex flex-col  leading-5 gap-4">
                    <div className="flex flex-col  gap-4 grow">
                        <div onBlur={() => form.validateField("currency")}>
                            <Select
                                data={Object.entries(CURRENCY).map(([currencyCode, { code }]) => `${code}`)}
                                defaultValue="USD"
                                classNames={{
                                    input: classes["input-dropdown"]
                                }}
                                {...form.getInputProps('currency')}
                            />
                        </div>
                        <div onBlur={() => {form.validateField("amount")}}>
                            <NumberInput
                                placeholder="1"
                                hideControls
                                className="grow"
                                classNames={{
                                    input: classes["input-donate"]
                                }}
                                allowNegative={false}
                                thousandSeparator=","
                                clampBehavior="strict"
                                min={1}
                                max={99999}
                                {...form.getInputProps('amount')}
                            />
                        </div>
                    </div>
                    <Button type="submit" className="bg-primary text-sm">
                        Donate 
                    </Button>
                </div>
            </form>
        </div>
    );
};