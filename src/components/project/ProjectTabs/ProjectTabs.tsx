"use client";

import { Tabs } from "@mantine/core";
import classes from "./ProjectTabs.module.css";
import TierRewards from "../TierRewards";
import FAQs from "../FAQs";
import { TierRewardType, FAQType } from "@/types/Types";

/**
 * Displays the navigation tabs for (1) Rewards and (2) FAQ.
 */
export default function ProjectTabs (
    {
        rewards, 
        faqs
    } : {
        rewards: TierRewardType[], // TODO: Update object type
        faqs: FAQType[]    
    }) {
    return (
        <Tabs defaultValue="rewards" classNames={classes} className="transition">
          <Tabs.List justify="center" className="transition">
              <Tabs.Tab value="rewards" className="transition ease-in">
                  Rewards
              </Tabs.Tab>
              <Tabs.Tab value="faq" className="transition ease-in">
                  FAQ
              </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="rewards" className="py-7 px-8 flex flex-col gap-3 container mx-auto pb-page-sm lg:pb-page">
            <h2 className="text-xl mb-4 font-semibold lg:text-center">Available Tier Rewards</h2>
            <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                {rewards.map((reward: TierRewardType) => {
                    return (
                        <TierRewards
                            key={reward.id}
                            {...reward}
                        /> 
                    )
                })}
            </div>
            
          </Tabs.Panel>
          <Tabs.Panel value="faq" className="p-7 container mx-auto pb-page-sm lg:pb-page">
            <div>
                <FAQs items={faqs}/>
            </div>
          </Tabs.Panel>
        </Tabs>
    )
};