"use client";

import { Tabs } from "@mantine/core";
import classes from "./ProjectTabs.module.css";
import Reward from "../Reward";
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
        <Tabs defaultValue="faq" classNames={classes} className="border-t-2">
          <Tabs.List justify="center">
              <Tabs.Tab value="rewards">
                  Rewards
              </Tabs.Tab>
              <Tabs.Tab value="faq">
                  FAQ
              </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="rewards" className="p-7 flex flex-col gap-3">
            {rewards.map((reward: { sys: { id: string }, reward: string, description: string, requiredAmt: number }) => {
                return (
                    <Reward
                        key={reward.sys.id}
                        name={reward.reward}
                        description={reward.description}
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