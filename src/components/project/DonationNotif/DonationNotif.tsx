"use client";

import { cashFormatter } from "@/helpers/numberFormatter"
import { notifications } from "@mantine/notifications";
import { useState, useEffect } from "react";
import classes from "./DonationNotif.module.css";  
import { getRecentDonation, NOTIF_INTERVAL } from "@/helpers/requests";
import { DonationType } from "@/types/Types";

/**
 * Displays the latest donator in the past 5 minutes.
 */
export default function DonationNotif ()
{
    const [recentDonation, setRecentDonation] = useState<DonationType | null>(null);
    const [shouldNotify, setShouldNotify] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRecentDonation();
            // DEV NOTE: Should update to false when database persists, set to true to showcase notification feature.
            setShouldNotify(true);
            setRecentDonation((prevData) => {
                if (JSON.stringify(data) !== JSON.stringify(prevData)) {
                    setShouldNotify(true);
                }
                return data;
            })
            // console.log(data);
        }

        fetchData();
        
        // Perform fetch every x intervals
        const interval = setInterval(() => fetchData(), Math.floor(Math.random() * 15000) + 10);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (shouldNotify && recentDonation) {
            notifications.show({
                title: "Donation Update",
                message: `${recentDonation.name !== null ? recentDonation.name : "Anonymous"} recently donated ${cashFormatter(recentDonation.amount, recentDonation.currency)}`,
                autoClose: 2000,
                classNames: classes
            })
        }
    }, [shouldNotify, recentDonation]);

    return <></>
};