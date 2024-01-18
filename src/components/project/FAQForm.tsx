"use client";

import { Accordion, TextInput, Textarea, Button } from "@mantine/core";
import { useForm, isNotEmpty } from "@mantine/form";

/**
 * Displays a dropdown with a form for asking further questions to a fundraising project.
 */
export default function FAQForm() {
    const form = useForm({
        initialValues: {
            email: "",
            question: "",
        },

        validate: {
            email: (value) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ? null : "Invalid email."),
            question: isNotEmpty("A question is required.")
        }
    });

    // TODO: Update type
    const askQuestion = async (formValues : any) => {
        const result = await fetch("http://localhost:3000/api/askQuestion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(formValues)
        });
    }

    return (
        <Accordion.Item key="faqForm" value="faqForm" className="rounded-md mb-2 border-2">
            <Accordion.Control>
                <h3 className="mr-2 font-medium">Have other questions?</h3>
            </Accordion.Control>
            <Accordion.Panel>
                <form onSubmit={form.onSubmit(async (values) => askQuestion(values))}>
                    <div className="flex flex-col mb-4 gap-4">
                        <div onBlur={() => {form.validateField("email")}}>
                            <TextInput
                                label="Email address"
                                placeholder="Enter a valid email address"
                                {...form.getInputProps("email")}
                            />
                        </div>
                        <div onBlur={() => {form.validateField("question")}}>
                            <Textarea
                                label="Question"
                                placeholder="Your question here"
                                {...form.getInputProps("question")}
                                />
                        </div>
                    </div>
                    <Button type="submit" className="bg-primary">
                        Ask question 
                    </Button>
                </form>
            </Accordion.Panel>
        </Accordion.Item>
    );
};