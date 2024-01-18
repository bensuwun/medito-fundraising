/**
 * Calculates the percentage in decimal form. Rounded to whole percentage (i.e. 0.00 to 1.00)
 * @param amtRaised number - amount raised
 * @param targetAmt number - the target amount to earn
 * @returns The percentage in decimal form rounded to whole percentage (i.e. 0.00 to 1.00)
 */
export default function calculateGoalPercentage(amtRaised: number, targetAmt: number): number {
    const goalPercentage = Math.floor((amtRaised / targetAmt) * 100) / 100;
    return goalPercentage;
}