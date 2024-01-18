"use client";

import { Tabs } from "@mantine/core";
import classes from "./ProjectTabs.module.css";
import TierRewards from "../TierRewards";
import FAQs from "../FAQs";

/**
 * Displays the navigation tabs for (1) Rewards and (2) FAQ.
 */
export default function ProjectTabs (
    {
        rewards, 
        faqs
    } : {
        rewards: any, // TODO: Update object type
        faqs: any    
    }) {
    return (
        <Tabs defaultValue="rewards" classNames={classes} className="border-t-2 transition">
          <Tabs.List justify="center" className="transition">
              <Tabs.Tab value="rewards" className="transition ease-in">
                  Rewards
              </Tabs.Tab>
              <Tabs.Tab value="faq" className="transition ease-in">
                  FAQ
              </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="rewards" className="p-7 flex flex-col gap-3">
            {/* TODO: Update type */}
            {rewards.map((reward: { id: string, tier: string, incentives: any, requiredAmt: number }) => {
                return (
                    <TierRewards
                        key={reward.id}
                        tier={reward.tier}
                        incentives={reward.incentives}
                        amt={reward.requiredAmt}
                    /> 
                )
            })}
          </Tabs.Panel>
          <Tabs.Panel value="faq" className="p-7 flex flex-col gap-3">
            <div>
                <FAQs items={faqs}/>
            </div>
          </Tabs.Panel>
        </Tabs>
    )
};