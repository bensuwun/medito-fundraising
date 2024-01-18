import { List } from "@mantine/core";
/**
 * Displays rewards/incentives for a given tier.
 */
export default function TierRewards(
    {
        tier, 
        incentives,
        amt
    } : {
        tier: string, 
        incentives: [{
            id: string,
            description: string
        }],
        amt: number
    }) 
{
    return (
        <div className="border-2 p-4 flex flex-col gap-2 rounded-md">
            <div className="flex justify-between gap-6 leading-5">
                <p className="h-full font-semibold">{tier}</p>
                <p>{`$${amt}`}</p>
            </div>
            <List className="mt-4">
                {incentives.map((incentive) => {
                    return (
                        <List.Item key={incentive.id} className="list-disc">
                            {incentive.description}
                        </List.Item>
                    )
                })}
            </List>
        </div>
    )
}