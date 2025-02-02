import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [openProject, setOpenProject] = useState(false);

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar handleOpenProject={() => setOpenProject(true)} />
      {openProject ? (
        <NewProject />
      ) : (
        <NoProjectSelected handleOpenProject={() => setOpenProject(true)} />
      )}
    </main>
  );
}

export default App;
