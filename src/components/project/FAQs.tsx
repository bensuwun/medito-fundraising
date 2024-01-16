"use client";

import { Accordion } from "@mantine/core";
import FilledBtn from "../buttons/FilledBtn";

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
            <Accordion.Item key={item.sys.id} value={item.sys.id} className="rounded-md mb-2 border-2">
                <Accordion.Control>
                    <h3 className="mr-2">{item.question}</h3>
                </Accordion.Control>
                <Accordion.Panel>
                    <p className="text-sm">{item.answer}</p>
                </Accordion.Panel>
            </Accordion.Item>
        );
    });

    return (
        <div>
            <h2 className="text-xl mb-4">Frequently Asked Questions</h2>
            <p className="text-sm mb-4">Didn&apos;t find the answer you&apos;re looking for? Ask us directly.</p>
            <FilledBtn
                text="Ask a question" />
            

            {/* FAQ List */}
            <Accordion className="mt-8">
                {accordionItems}
            </Accordion>
        </div>
    );
};