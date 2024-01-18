import { DonationType } from "@/types/Types";

/**
 * Generates a random donation object.
 */
export default function randomDonationGenerator(): DonationType {
    const peopleNames: string[] = [
        "Emma Johnson",
        "Daniel Smith",
        "Olivia Davis",
        "Liam Miller"
    ];
    const amount = Math.floor(Math.random() * 100);
    const currency = "USD";
    const personIdx = Math.floor(Math.random() * peopleNames.length);

    return {
        name: peopleNames[personIdx],
        amount,
        currency,
    }
};