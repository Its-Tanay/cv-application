import React from "react";
import PersonalInfoPreview from "./personalInfoPreview";
import EducationPreview from "./educationPreview";
import ExperiencePreview from "./experiencePreview";
import AchievementsPreview from "./achievementsPreview";
import PorPreview from "./porPreview";
import ProjectsPreview from "./projectsPreview";

export default function CVPreview({ personalInfo, education, experiences, achievements, PosOfResp, projects }) {
  return (
    <div id="cv-preview">
      <PersonalInfoPreview personalInfo={personalInfo} />
      <EducationPreview education={education} />
      <ExperiencePreview experiences={experiences} />
      <ProjectsPreview projects={projects} />
      <PorPreview PosOfResp={PosOfResp} />
      <AchievementsPreview achievements={achievements} />
    </div>
  );
}


