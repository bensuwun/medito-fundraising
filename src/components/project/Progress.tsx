"use client";

import { useState, useEffect } from "react";
import { cashFormatter } from "../../helpers/numberFormatter";
import calculateGoalPercentage from "../../helpers/calculateGoalPercentage";

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
    }, []);
    

    return (
        <div className="flex flex-col items-center gap-2">
            <p>
                <span className="font-bold">US$ {cashFormatter(totalAmtRaised)}</span> raised
            </p>
            {/* Progress Bar Container */}            
            <div className="flex w-full *:relative h-3 bg-gray-200 justify-start">
                <div className="border w-full bg-gray-400 relative transition" style=
                    {{
                        transform: `scale(${goalPercentage}, 1)`, 
                        transformOrigin: "left center",
                        transitionDuration: ".7s"
                    }}>
                </div>
            </div>
           
            <p>
                of goal <span className="font-bold">US$ {cashFormatter(5500.2)} </span>
            </p>
        </div>
    )
};