"use client";

import { Accordion, Card } from "@mantine/core";
import FAQForm from "./FAQForm";
import { FAQType } from "@/types/Types";

/**
 * Displays a dropdown containing the question and answer.
 * 
 */
export default function FAQs(
    {
        items
    } : 
    {   
        items: FAQType[]
    }) 
{
    const accordionItems = items.map(item => {
        return (
            <Accordion.Item key={item.id} value={item.id} className="px-0 py-1 border-none">
                <Card shadow="sm" padding="0" radius="md" withBorder className="px-1">
                    <Accordion.Control>
                        <h3 className="mr-2 font-medium">{item.question}</h3>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <p className="text-sm">{item.answer}</p>
                    </Accordion.Panel>
                </Card>
            </Accordion.Item>
        );
    });

    return (
        <div>
            <h2 className="text-xl mb-4 font-semibold lg:text-center">Frequently Asked Questions</h2>

            {/* FAQ List */}
            <Accordion className="mt-8 flex flex-col gap-2">
                {accordionItems}
                <FAQForm />
            </Accordion>
        </div>
    );
};