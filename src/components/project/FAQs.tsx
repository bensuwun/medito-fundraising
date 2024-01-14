"use client";

import { Accordion } from "@mantine/core";

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
            sys: {
                id: string
            }
            question: string, 
            answer: string
        }]
    }) 
{
    const accordionItems = items.map(item => {
        return (
            <Accordion.Item key={item.sys.id} value={item.sys.id} className="p-2 rounded-md mb-2 border-2">
                <Accordion.Control>
                    <h3 className="font-semibold mr-2">{item.question}</h3>
                </Accordion.Control>
                <Accordion.Panel>
                    <p className="text-sm">{item.answer}</p>
                </Accordion.Panel>
            </Accordion.Item>
        );
    });

    return (
        <Accordion>
            {accordionItems}
        </Accordion>
    );
};