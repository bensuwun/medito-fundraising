import Progress from "./Progress";
import Donate from "./Donate/Donate";
import { Card } from "@mantine/core";
import { getTotalAmountRaised } from "@/helpers/requests";

/**
 * Displays the title, description, and the current progress and target goal of the fundraising initiative.
 */
export default async function ProjectDetails (
    {
        name,
        description,
        targetAmt,
    } : {
        name: string,
        description: string,
        targetAmt: number,
    }) 
{
    const totalAmtRaised = await getTotalAmountRaised();

    return (
        <div className="flex flex-col gap-3 px-7 py-page-sm lg:py-page container mx-auto lg:grid lg:grid-cols-8">
            {/* Project Description */}
            <div className="flex flex-col col-span-5 p-4 gap-3">
                    <h1 className="font-bold text-2xl lg:text-3xl">{name}</h1>
                    <p>{description}</p>
            </div>
            
            {/* Progress and Donate Container */}
            <Card shadow="sm" radius="md" withBorder className="px-5 py-5 gap-8 col-span-3">
                {/* Progress Bar */}
                <Progress targetAmt={targetAmt} totalAmtRaised={totalAmtRaised}/>

                {/* Donate Section */}
                <Donate />
            </Card>
        </div>
    )
}