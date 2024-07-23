import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import NoProjectSelected from "./NoProjectSelected";
import NewProject from "./NewProject";
import DiaryEntry from "./DiaryEntry";

function DashBoard(props) {
  const [projectsState, setProjectsState] = useState({
    diary: [],
    entry: {},
  });
  const [isView, setIsView] = useState(false);
  const [viewedProjectId, setViewedProjectId] = useState(null);
  const entryLimit = 3;
  const modal = useRef();
  let content = undefined;

  function handleView(id) {
    setIsView(true);
    setViewedProjectId(id);
  }

  const handleStartAddProject = () => {
    const projectID = Date.now();
    const newProject = {
      id: projectID,
      title: `Diary ${projectsState.diary.length + 1}`,
    };
    setProjectsState((prevState) => ({
      ...prevState,
      diary: [...prevState.diary, newProject],
    }));
  };

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      const updatedDiary = prevState.diary.filter(
        (project) => project.id !== id
      );
      const updatedEntries = { ...prevState.entry };
      delete updatedEntries[id];
      return { diary: updatedDiary, entry: updatedEntries };
    });
  }

  function handleSaveProject(id, newTitle) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.diary.map((project) =>
        project.id === id ? { ...project, title: newTitle } : project
      );
      return { diary: updatedProjects, entry: prevState.entry };
    });
  }

  function handleBack() {
    setIsView(false);
    setViewedProjectId(null);
  }

  function handleAddEntry(newEntry) {
    if (viewedProjectId === null) return;

    setProjectsState((prevState) => {
      const updatedEntries = { ...prevState.entry };
      updatedEntries[viewedProjectId] = updatedEntries[viewedProjectId] || [];
      if (updatedEntries[viewedProjectId].length < entryLimit) {
        updatedEntries[viewedProjectId] = [
          ...updatedEntries[viewedProjectId],
          newEntry,
        ];
      }
      return {
        ...prevState,
        entry: updatedEntries,
      };
    });
  }

  return (
    <div>
      <NavBar showNavbar={props.showNavbar} onReturn={props.onReturn} />
      <div className="flex justify-center items-start flex-wrap box-border">
        <div className="m-5 select-none justify-center items-baseline w-full no-underline [-webkit-text-stroke:2px_#006400] text-center text-5xl text-white">
          <h1>
            {!isView ? (
              "Diary"
            ) : (
              <React.Fragment>
                <button onClick={handleBack}>Diary</button>/Entry
              </React.Fragment>
            )}
          </h1>
        </div>
        {!isView && (
          <React.Fragment>
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
            {projectsState.diary.map((project) => (
              <NewProject
                key={project.id}
                project={project}
                onDelete={() => handleDeleteProject(project.id)}
                onSave={(newTitle) => handleSaveProject(project.id, newTitle)}
                onView={() => handleView(project.id)}
                entryLimit={entryLimit}
                entryCount={
                  projectsState.entry[project.id]
                    ? projectsState.entry[project.id].length
                    : 0
                }
              />
            ))}
          </React.Fragment>
        )}
        {isView && (
          <DiaryEntry
            entries={projectsState.entry[viewedProjectId] || []}
            onAddEntry={handleAddEntry}
            modalContent={content}
          />
        )}
      </div>
    </div>
  );
}

export default DashBoard;
