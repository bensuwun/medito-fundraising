import Progress from "./Progress";

/**
 * Displays the title, description, and the current progress and target goal of the fundraising initiative.
 */
export default function ProjectDetails (
    {
        name,
        description,
        targetAmt,
        totalAmtRaised
    } : {
        name: string,
        description: string,
        targetAmt: number,
        totalAmtRaised: number
    }) 
{
    return (
        <div className="flex flex-col gap-3 px-9 py-7">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p>{description}</p>
            {/* Progress Bar */}
            <Progress targetAmt={targetAmt} totalAmtRaised={totalAmtRaised}/>

            {/* Donate Button */}
            <div>

            </div>
        </div>
    )
}