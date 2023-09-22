import React from "react";
import PersonalInfoPreview from "./personalInfoPreview";
import EducationPreview from "./educationPreview";
import ExperiencePreview from "./experiencePreview";
import AchievementsPreview from "./achievementsPreview";
import PorPreview from "./porPreview";
import ProjectsPreview from "./projectsPreview";

export default function CVPreview({ personalInfo, education, experiences, achievements, PosOfResp, projects}) {
  return (
    <>
      <div id="pi-preview">
        <PersonalInfoPreview personalInfo={personalInfo} />
      </div>
      <div id="ed-preview">
        <EducationPreview education={education} />
      </div>
      <div id="exp-preview">
        <ExperiencePreview experiences={experiences} />
      </div>
      <div id="proj-preview">
        <ProjectsPreview projects={projects} />
      </div>
      <div id="por-preview">
        <PorPreview PosOfResp={PosOfResp} />
      </div>
      <div id="ach-preview">
        <AchievementsPreview achievements={achievements} />
      </div>
    </>
  );
}


