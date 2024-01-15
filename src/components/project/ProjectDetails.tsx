import Progress from "./Progress";

/**
 * Displays the title, description, and the current progress and target goal of the fundraising initiative.
 */
export default function ProjectDetails (
    {
        name,
        description,
        targetAmt
    } : {
        name: string,
        description: string,
        targetAmt: number
    }) 
{
    return (
        <div className="flex flex-col gap-3 p-7">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p>{description}</p>
            {/* Progress Bar */}
            {/* @ts-expect-error Server Component */}
            <Progress targetAmt={targetAmt}/>

            {/* Donate Button */}
            <div>

            </div>
        </div>
    )
}