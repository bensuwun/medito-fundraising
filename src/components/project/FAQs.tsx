"use client";

import { Accordion } from "@mantine/core";
import FAQForm from "./FAQForm";

/**
 * Displays a dropdown containing the question and answer.
 * 
 */
export default function FAQs(
    {
        items
    } : 
    {   
        items: [{
            id: string,
            question: string, 
            answer: string
        }]
    }) 
{
    const accordionItems = items.map(item => {
        return (
            <Accordion.Item key={item.id} value={item.id} className="rounded-md mb-2 border-2">
                <Accordion.Control>
                    <h3 className="mr-2 font-medium">{item.question}</h3>
                </Accordion.Control>
                <Accordion.Panel>
                    <p className="text-sm">{item.answer}</p>
                </Accordion.Panel>
            </Accordion.Item>
        );
    });

    return (
        <div>
            <h2 className="text-xl mb-4 font-semibold">Frequently Asked Questions</h2>

            {/* FAQ List */}
            <Accordion className="mt-8">
                {accordionItems}
                <FAQForm />
            </Accordion>
        </div>
    );
};