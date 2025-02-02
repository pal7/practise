import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ handleOpenProject }) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        src={noProjectImage}
        alt='empty task list'
        className='w-16 h-16 object-contain mx-auto'
      />
      <h2 className='text-2xl font-bold text-stone-800 my-4'>
        No project selected
      </h2>
      <p className='text-stone-600 mt-2'>
        Select a project from the sidebar to view its tasks.
      </p>
      <p className='mt-8'>
        <Button onClick={handleOpenProject}>Create New Project</Button>
      </p>
    </div>
  );
}
