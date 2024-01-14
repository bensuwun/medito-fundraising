import Navbar from "../components/Navbar";
import Progress from "../components/project/Progress";
import project from "../../public/project.json";
import ProjectTabs from "../components/project/ProjectTabs/ProjectTabs";

export default function Home() {
  // Obtain project details
  const proj = project.data.fundraisingProject;
  return (
    <>
      <Navbar />

      <div className="container flex flex-col gap-3 p-7">
        <h1 className="font-bold text-2xl">{proj.name}</h1>
        <p>{proj.description}</p>
        {/* Progress Bar */}
        <Progress />

        {/* Donate Button */}
        <div>

        </div>
      </div>

      {/* Tabs */}
      <ProjectTabs 
        rewards={proj.rewardsCollection.items}
        faqs={proj.faqsCollection.items}
      />
      
    </>
  )
}
