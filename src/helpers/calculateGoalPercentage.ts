/**
 * Calculates the percentage (in decimal form). Rounds down to 2 decimal places.
 * @param amtRaised 
 * @param targetAmt 
 * @returns 
 */
export default function calculateGoalPercentage(amtRaised: number, targetAmt: number): number {
    const goalPercentage = Math.floor(amtRaised / targetAmt * 100) / 100;
    return goalPercentage;
}