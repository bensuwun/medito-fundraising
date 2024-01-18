import { DonationType, EmailQuestionType } from "@/types/Types";

// Change to actual API endpoint
const API_BASE_URL = process.env.NODE_ENV === "production" 
    ? process.env.NEXT_PROD_API_BASE_URL
    : process.env.NEXT_PUBLIC_DEV_API_BASE_URL;

/**
 * Makes a POST request to add a new donation to the database.
 * @returns The added DonationType.
 */
export async function insertDonation(donation: DonationType): Promise<DonationType | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/addDonation`, { 
            method: 'POST',
            cache: 'no-store',
            body: JSON.stringify({ donation }), 
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
    return null
}

/**
 * Makes a GET request to obtain the total amount raised.
 * @returns the total amount raised
 */
export async function getTotalAmountRaised(): Promise<number> {
    var totalAmtRaised = 0;
    console.log(API_BASE_URL)
    try {
        const response = await fetch(`${API_BASE_URL}/totalAmountRaised`, { cache: 'no-store' });
        const data = await response.json();
        totalAmtRaised = data.sum;
    } catch (error) {
        console.log(error);
    }
    return totalAmtRaised;
}

/**
 * Makes a GET request to obtain the most recent donation for notification.
 * @returns The recent donation of type DonationType.
 */
export async function getRecentDonation(): Promise<DonationType | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/recentDonation`, { cache: 'no-store' });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

/**
 * Handles the POST request to API to ask a new question.
 * @param formValues EmailQuestionType
 * @returns The added EmailQuestion
 */
export async function postAskQuestion(formValues: EmailQuestionType): Promise<EmailQuestionType | null> {
    try {
        const result = await fetch(`${API_BASE_URL}/askQuestion`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(formValues)
        });
        return formValues;
    } catch(error) {
        console.log(error);
        return null;
    }
}

/**
 * Handles the POST request to API to create a new Stripe checkout session.
 * @param data 
 * @returns The Stripe session object
 */
export async function createCheckoutSession(data: DonationType): Promise<any> {
    try {
        const result = await fetch('/api/createCheckoutSession', {
            method: 'POST',
            body: JSON.stringify(data, null),
            headers: {
                'content-type': 'application/json',
            },
        })
        return result;
    } catch (error) {
        console.log(error);
        return null
    }
}

/**
 * Interval for fetching recent donations in milliseconds.
 */
export const NOTIF_INTERVAL: number = 10000;