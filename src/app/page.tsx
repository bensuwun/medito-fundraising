import Navbar from "../components/Navbar";
import Progress from "../components/Progress";
import project from "../../public/project.json";

export default function Home() {
  const proj = project.data.fundraisingProject;
  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-3 p-7">
        <h1 className="font-bold text-2xl">{proj.name}</h1>
        <p>{proj.description}</p>
        {/* Progress Bar */}
        <Progress />

        {/* Donate Button */}
        <div>

        </div>
      </div>
      
    </>
  )
}
