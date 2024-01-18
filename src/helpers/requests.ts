import DonationType from "@/types/DonationType";

/**
 * Makes a GET request to obtain the total amount raised.
 */
export async function getTotalAmountRaised(): Promise<number> {
    var totalAmtRaised = 0;
    try {
        const response = await fetch("http://localhost:3000/api/totalAmountRaised", { cache: 'no-store' });
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
    // TODO: Update type to DonationType
    try {
        const response = await fetch("http://localhost:3000/api/recentDonation", { cache: 'no-store' });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
/**
 * Interval for fetching recent donations in milliseconds.
 */
export const NOTIF_INTERVAL: number = 10000;