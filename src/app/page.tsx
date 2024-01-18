import project from "../../public/project.json";
import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectTabs from "@/components/project/ProjectTabs/ProjectTabs";
import DonationNotif from "@/components/project/DonationNotif/DonationNotif";
import CURRENCY from "@/helpers/currencies";
import { getTotalAmountRaised } from "@/helpers/requests";

export default async function Home() {
  // Obtain project details
  const proj = project.data.fundraisingProject;

  // Fetch donation data - total amount raised
  var totalAmtRaised: number = await getTotalAmountRaised();


  return (
    <>
      {/* Client */}
      <DonationNotif />

      {/* Server */}
      <ProjectDetails
        name={proj.name}
        description={proj.description}
        targetAmt={proj.targetAmt}
        totalAmtRaised={totalAmtRaised}
      />

      {/* Client - Tabs and Panels */}
      <ProjectTabs 
        rewards={proj.rewardsCollection.items}
        faqs={proj.faqsCollection.items}
      />
      
    </>
  )
}