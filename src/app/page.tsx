import project from "../../public/project.json";
import Navbar from "../components/Navbar";
import ProjectDetails from "../components/project/ProjectDetails";
import ProjectTabs from "../components/project/ProjectTabs/ProjectTabs";

export default async function Home() {
  // Obtain project details
  const proj = await project.data.fundraisingProject;

  // Fetch donation data
  var dataRetrieved: boolean = true;
  var totalAmtRaised: number = 0;
  // DEV NOTES: Update API call to total amount raised here. 
  try {
      const response = await fetch("http://localhost:3000/api/totalAmountRaised", { cache: 'no-store' });
      const data = await response.json();
      totalAmtRaised = data.sum;
  } catch (error) {
      dataRetrieved = false;
      console.log(error);
  }

  return (
    <>
      <Navbar />

      <ProjectDetails
        name={proj.name}
        description={proj.description}
        targetAmt={proj.targetAmt}
        totalAmtRaised={totalAmtRaised}
      />

      {/* Tabs and Panels */}
      <ProjectTabs 
        rewards={proj.rewardsCollection.items}
        faqs={proj.faqsCollection.items}
      />
      
    </>
  )
}
