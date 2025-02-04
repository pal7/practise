import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // if null create new project
  // if undefined No project selected
  //if id? then open that project

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleNewProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleNewProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
