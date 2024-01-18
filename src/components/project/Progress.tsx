"use client";

import { useState, useEffect } from "react";
import { cashFormatter, numberFormatter } from "@/helpers/numberFormatter";
import calculateGoalPercentage from "@/helpers/calculateGoalPercentage";

/**
 *  Displays the target amount of the fundraising initiative. Fetches the total amount raised from API.
 */
export default function ProgressBar(
    {
        targetAmt,
        totalAmtRaised
    }: {
        targetAmt: number,
        totalAmtRaised: number
    }) 
{
    const [goalPercentage, setGoalPercentage] = useState(0);
    useEffect(() => {
        setGoalPercentage(calculateGoalPercentage(totalAmtRaised, targetAmt));
    }, [totalAmtRaised, targetAmt]);
    

    return (
        <div className="flex flex-col items-center gap-2 mt-4">
            <p>
                <span className="font-bold">
                    {`${cashFormatter(totalAmtRaised)} `}
                    <span className="font-bold">
                        {`(${numberFormatter(parseInt((goalPercentage * 100).toFixed(0)))}%)`}
                    </span>
                </span> raised
            </p>
            {/* Progress Bar Container */}            
            <div className="flex w-full *:relative h-3 bg-gray-200 justify-start">
                <div className="border w-full relative transition bg-progress-bar" style=
                    {{
                        transform: `scale(${goalPercentage > 1 ? 1 : goalPercentage}, 1)`, 
                        transformOrigin: "left center",
                        transitionDuration: "1.5s"
                    }}>
                </div>
            </div>
            <p>
                of goal <span className="font-bold">{cashFormatter(targetAmt)} </span>
            </p>
        </div>
    )
};