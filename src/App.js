import React, { useState } from "react";
import PersonalInfo from "./components/Form/personalinfo";
import Experience from "./components/Form/experience";
import Education from "./components/Form/education";
import Achievements from "./components/Form/achievements";
import PosOfResp from "./components/Form/por";
import Projects from "./components/Form/projects";
import CVPreview from "./components/Preview/preview"; 
import "./styles/App.css"

function App() {
  
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
  });

  const handleChangePersonalInfo = (e) => {
    setPersonalInfo({...personalInfo, [e.target.name]: e.target.value})
}

  const [experiences, setExperiences] = useState([
    {
      company: "",
      position: "",
      city: "",
      from: "",
      to: "",
      description: "",
    },
  ]);

  const handleChangeExperience = (e, index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [e.target.name]: e.target.value,
    };
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { company: "", position: "", from: "", to: "", description: "" }]);
  };

  const removeExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      city: "",
      from: "",
      to: "",
      description: "",
    },
  ]);

  const handleChangeEducation = (e, index) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
        ...updatedEducation[index],
        [e.target.name]: e.target.value,
    };
    setEducation(updatedEducation);
}

  const addEducation = () => {
    setEducation([...education, { school: "", degree: "", city: "", from: "", to: "", description: "" }]);
}

  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
}

  const [achievements, setAchievements] = useState([]);

  const handleChangeAchievements = (e, index) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index] = {
        ...updatedAchievements[index],
        [e.target.name]: e.target.value,
    };
    setAchievements(updatedAchievements);
  }

  const addAchievement = () => {
    setAchievements([...achievements, { achievement: "" }]);
  }

  const removeAchievement = (index) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
  }

  const [posOfResp, setPosOfResp] = useState([
    {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleChangePosOfResp = (e, index) => {
    const updatedPosOfResp = [...posOfResp];
    updatedPosOfResp[index] = {
        ...updatedPosOfResp[index],
        [e.target.name]: e.target.value,
    };
    setPosOfResp(updatedPosOfResp);
  }

  const addPosOfResp = () => {
    setPosOfResp([...posOfResp, { position: "", company: "", startDate: "", endDate: "", description: "" }]);
  }

  const removePosOfResp = (index) => {
    const updatedPosOfResp = [...PosOfResp];
    updatedPosOfResp.splice(index, 1);
    setPosOfResp(updatedPosOfResp);
  }

  const [projects, setProjects] = useState([
    {
      title: "",
      techStack: "",
      description: "",
      gitlink: "",
      livelink: "",
    },
  ]);

  const handleChangeProjects = (e, index) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
        ...updatedProjects[index],
        [e.target.name]: e.target.value,
    };
    setProjects(updatedProjects);
  }

  const addProject = () => {
    setProjects([...projects, { title: "", description: "", gitlink: "", livelink: "", techStack: ""}]);
  }

  const removeProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  }

  return (
    <div className="App">
      <div className="cv-form">

        <div id="personalInfo-form">
          <h2>Personal Information</h2>
          <PersonalInfo personalInfo={personalInfo} handleChange={handleChangePersonalInfo}/>
        </div>
        <div id="education-form">
          <h2>Education</h2>
          <Education education={education} handleChange={handleChangeEducation} addEducation={addEducation} removeEducation={removeEducation} />
        </div>
        <div id="experiences-form">
          <h2>Experience</h2>
          <Experience experiences={experiences} handleChange={handleChangeExperience} addExperience={addExperience} removeExperience={removeExperience}/>
        </div>
        <div id="projects-form">
          <h2>Projects</h2>
          <Projects projects={projects} handleChangeProjects={handleChangeProjects} addProject={addProject} removeProject={removeProject} />
        </div>
        <div id="posOfResp-form">
          <h2>Position of Responsibility</h2>
          <PosOfResp posOfResp={posOfResp} handleChange={handleChangePosOfResp} addPosOfResp={addPosOfResp} removePosOfResp={removePosOfResp} />
        </div>
        <div id="achievements-form">
          <h2>Achievements</h2>
          <Achievements achievements={achievements} handleChange={handleChangeAchievements} addAchievement={addAchievement} removeAchievement={removeAchievement}/>
        </div>
      </div>

      <CVPreview
          personalInfo={personalInfo}
          education={education}
          experiences={experiences}
          achievements={achievements}
          PosOfResp={posOfResp}
          projects={projects}
      />
    </div>
  );
}

export default App;
