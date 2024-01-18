import { List, Card } from "@mantine/core";
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
        <Card shadow="sm" padding="lg" radius="md" withBorder className="px-8">
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
        </Card>
    )
}