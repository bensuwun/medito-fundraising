import { DonationType, EmailQuestionType } from "@/types/Types";

// Change to actual API endpoint
const API_BASE_URL = process.env.NODE_ENV === "production" 
    ? `https://medito-fundraise.pages.dev/api`
    : `http://localhost:3000/api`;

/**
 * Makes a POST request to add a new donation to the database.
 */
export async function insertDonation(donation: DonationType): Promise<DonationType | null> {
    try {
        const response = await fetch("http://localhost:3000/api/addDonation", { 
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
 */
export async function getTotalAmountRaised(): Promise<number> {
    var totalAmtRaised = 0;
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
 * @param formValues 
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
 * Interval for fetching recent donations in milliseconds.
 */
export const NOTIF_INTERVAL: number = 10000;