import project from "../../public/project.json";
import Navbar from "../components/Navbar";
import ProjectDetails from "../components/project/ProjectDetails";
import ProjectTabs from "../components/project/ProjectTabs/ProjectTabs";

export default function Home() {
  // Obtain project details
  const proj = project.data.fundraisingProject;
  return (
    <>
      <Navbar />

      <ProjectDetails
        name={proj.name}
        description={proj.description}
        targetAmt={proj.targetAmt}
      />

      {/* Tabs and Panels */}
      <ProjectTabs 
        rewards={proj.rewardsCollection.items}
        faqs={proj.faqsCollection.items}
      />
      
    </>
  )
}
