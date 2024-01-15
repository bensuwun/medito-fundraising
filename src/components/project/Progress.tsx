import { cashFormatter } from "../../helpers/numberFormatter";
import calculateGoalPercentage from "../../helpers/calculateGoalPercentage";

/**
 *  Displays the target amount of the fundraising initiative. Fetches the total amount raised from API.
 */
export default async function ProgressBar(
    {
        targetAmt
    }: {
        targetAmt: number
    }) 
{
    var dataRetrieved: boolean = true;
    var totalAmtRaised: number = 0;
    // DEV NOTES: Update API call to total amount raised here. 
    try {
        const response = await fetch("http://localhost:3000/api/totalAmountRaised", { cache: 'no-store' });
        const data = await response.json();
        totalAmtRaised = data.sum;
        console.log(totalAmtRaised);
    } catch (error) {
        dataRetrieved = false;
        console.log(error);
    }

    // Calculate goal percentage
    const goalPercentage = calculateGoalPercentage(totalAmtRaised, targetAmt);

    return (
        !dataRetrieved ? <p>Failed to retrieve donation data.</p> :
        <div className="flex flex-col items-center gap-2">
            <p>
                <span className="font-bold">US$ {cashFormatter(totalAmtRaised)}</span> raised
            </p>
            {/* Progress Bar Container */}
            <div className="flex w-full rounded-md relative h-3 bg-gray-200">
                <div className="rounded-md border bg-gray-400 relative" style={{width: goalPercentage}}>
                </div>
            </div>
            <p>
                of goal <span className="font-bold">US$ {cashFormatter(5500.2)} </span>
            </p>
        </div>
    )
};