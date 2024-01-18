import project from "../../public/project.json";
import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectTabs from "@/components/project/ProjectTabs/ProjectTabs";
import DonationNotif from "@/components/project/DonationNotif/DonationNotif";

export default async function Home() {
  // Obtain project details
  const proj = project.data.fundraisingProject;
  

  return (
    <>
      <DonationNotif />

      <ProjectDetails
        name={proj.name}
        description={proj.description}
        targetAmt={proj.targetAmt}
      />

      {/* Client - Tabs and Panels */}
      <ProjectTabs 
        rewards={proj.rewardsCollection.items}
        faqs={proj.faqsCollection.items}
      />
      
    </>
  )
}