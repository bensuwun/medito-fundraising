/**
 * Calculates the percentage 
 * @param amtRaised 
 * @param targetAmt 
 * @returns 
 */
export default function calculateGoalPercentage(amtRaised: number, targetAmt: number): string {
    const goalPercentage = amtRaised / targetAmt * 100;
    return `${goalPercentage}%`;
}