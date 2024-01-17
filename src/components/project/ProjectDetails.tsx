import Progress from "./Progress";
import Donate from "./Donate";

/**
 * Displays the title, description, and the current progress and target goal of the fundraising initiative.
 */
export default function ProjectDetails (
    {
        name,
        description,
        targetAmt,
        currency
    } : {
        name: string,
        description: string,
        targetAmt: number,
        currency: string
    }) 
{
    return (
        <div className="flex flex-col gap-3 p-7">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p>{description}</p>
            {/* Progress Bar */}
            <Progress />

            {/* Donate Button */}
            <Donate />
            <div>

            </div>
        </div>
    )
}