/**
 * Displays a single reward for a given fundraising project.
 */
export default function Reward(
    {
        name, 
        description,
        amt
    } : {
        name: string, 
        description: string
        amt: number
    }) 
{
    return (
        <div className="border-2 p-4 flex flex-col gap-2 rounded-md">
            <div className="flex justify-between gap-6 leading-5">
                <p className="h-full font-semibold">{name}</p>
                <p>{`$${amt}`}</p>
            </div>
            <p className="text-sm">{description}</p>   
        </div>
    )
}