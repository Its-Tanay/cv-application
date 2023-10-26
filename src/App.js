/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PersonalInfo from "./components/Form/personalinfo";
import Experience from "./components/Form/experience";
import Education from "./components/Form/education";
import Achievements from "./components/Form/achievements";
import PosOfResp from "./components/Form/por";
import Projects from "./components/Form/projects";
import CVPreview from "./components/Preview/preview"; 
import ReactToPrint from "react-to-print";

import "./styles/index.css"
import "./styles/cvPreview.css"

function App() {
  
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    portfolio: "",
    twitter: "",
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
    setEducation([...education, { school: "", degree: "", city: "", from: "", to: ""}]);
}

  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
}

  const [achievements, setAchievements] = useState([{achievement: ""}]);

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
    const updatedPosOfResp = [...posOfResp];
    updatedPosOfResp.splice(index, 1);
    setPosOfResp(updatedPosOfResp);
  }

  const [projects, setProjects] = useState([
    {
      title: "",
      techStack: "",
      description: "",
      githubLink: "",
      liveLink: "",
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
    setProjects([...projects, { title: "", description: "", githubLink: "", liveLink: "", techStack: ""}]);
  }

  const removeProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  }

  const [showExampleData, setShowExampleData] = useState(false);

  const loadExampleData = () => {
    setPersonalInfo({
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "+1 (123) 456-7890",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      portfolio: "https://johndoe-portfolio.com",
      twitter: "https://twitter.com/johndoe",
    })

    setExperiences([
      {
        company: "TechCo",
        position: "Senior Software Engineer",
        city: "San Francisco, CA",
        from: "June 2018",
        to: "Present",
        description: `As a Senior Software Engineer at TechCo, I lead a team of developers in the development of cutting-edge web applications. 
          My responsibilities include architecting scalable solutions, mentoring junior engineers, and collaborating with cross-functional teams. 
          I have successfully delivered 10+ projects, resulting in a 20% increase in user engagement and a 30% reduction in load times.`,
      },
      {
        company: "InnoSoft",
        position: "Software Developer",
        city: "New York, NY",
        from: "January 2015",
        to: "May 2018",
        description: `During my tenure at InnoSoft, I worked on a variety of projects ranging from web applications to mobile apps. 
          I was responsible for front-end development using React and Angular, back-end development with Node.js, and database design.
          I played a key role in optimizing database queries, resulting in a 40% improvement in application performance.`,
      },
    ]);

    setEducation([
      {
        school: "University of Computer Science",
        degree: "Bachelor of Science in Computer Science",
        city: "Los Angeles, CA",
        from: "August 2011",
        to: "May 2015",
      },
    ]);

    setAchievements([
      {achievement: "Achieved the highest score in the company-wide coding competition."},
      {achievement: "Received the 'Innovation Award' for developing a groundbreaking feature that streamlined the company's workflow."},
      {achievement: "Published a research paper on machine learning algorithms in a top-tier conference."},
    ]);

    setPosOfResp([
      {
        position: "Technical Lead",
        company: "Open Source Community",
        startDate: "July 2019",
        endDate: "Present",
        description: `As a Technical Lead in the Open Source Community, I oversee a team of open-source contributors working on various projects. 
          My role involves setting technical direction, conducting code reviews, and ensuring project goals are met. 
          I have successfully led the development of several open-source tools used by thousands of developers worldwide.`,
      },
    ]);

    setProjects([
      {
        title: "E-commerce Platform",
        techStack: "React, Node.js, MongoDB",
        description: `Led the development of a comprehensive e-commerce platform from inception to launch. 
          The platform includes features such as product catalog, user authentication, and secure payment processing. 
          Implemented a recommendation engine using machine learning algorithms, resulting in a 15% increase in sales.`,
        githubLink: "https://github.com/johndoe/e-commerce-platform",
        liveLink: "https://ecommerce.example.com",
      },
      {
        title: "Social Media Analytics Dashboard",
        techStack: "Angular, Python, Elasticsearch",
        description: `Collaborated with a cross-functional team to build a real-time social media analytics dashboard for tracking brand mentions and sentiment analysis. 
          Integrated Elasticsearch for efficient data retrieval and implemented data visualization using D3.js. 
          The project received positive feedback from clients and led to an increase in contract renewals.`,
        githubLink: "https://github.com/johndoe/social-analytics-dashboard",
        liveLink: "https://social-analytics.example.com",
      },
    ]);

    setShowExampleData(true);
  };

  console.log(showExampleData);

  const removeAllData = () => {
    setPersonalInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: "",
      twitter: "",
    })

    setExperiences([
      {
        company: "",
        position: "",
        city: "",
        from: "",
        to: "",
        description: "",
      },
    ]);

    setEducation([
      {
        school: "",
        degree: "",
        city: "",
        from: "",
        to: "",
      },
    ]);

    setAchievements([
      "",
    ]);

    setPosOfResp([
      {
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);

    setProjects([
      {
        title: "",
        techStack: "",
        description: "",
        githubLink: "",
        liveLink: "",
      },
    ]);

    setShowExampleData(false);
  };

  let componentRef = null;

  return (
    <div className="App">

      <div className="flex flex-col items-center m-4 gap-4 tablet:gap-6 laptop:gap-8">

          <div className="flex w-full flex-col items-center gap-2 tablet:flex-row tablet:justify-evenly">
            <button className="func-btns" onClick={loadExampleData}>Load an example</button>
            <button className="func-btns" onClick={removeAllData}>Remove all data</button>
            <ReactToPrint
                    trigger={() => {
                      return <button className="func-btns">Print CV</button>;
                    }}
                    content={() => componentRef}
                    documentTitle="CV"
            />
          </div>

          <PersonalInfo personalInfo={personalInfo} handleChange={handleChangePersonalInfo}/>
          <Education education={education} handleChange={handleChangeEducation} addEducation={addEducation} removeEducation={removeEducation} />
          <Experience experiences={experiences} handleChange={handleChangeExperience} addExperience={addExperience} removeExperience={removeExperience}/>
          <Projects projects={projects} handleChange={handleChangeProjects} addProject={addProject} removeProject={removeProject} />
          <PosOfResp posOfResp={posOfResp} handleChange={handleChangePosOfResp} addPosOfResp={addPosOfResp} removePosOfResp={removePosOfResp} />
          <Achievements achievements={achievements} handleChange={handleChangeAchievements} addAchievement={addAchievement} removeAchievement={removeAchievement}/>
    
      </div>

      {/*

      <div id="cv-preview" ref={(el) => (componentRef = el)}>
        <CVPreview
            personalInfo={personalInfo}
            education={education}
            experiences={experiences}
            achievements={achievements}
            PosOfResp={posOfResp}
            projects={projects}
        />
     
        
      </div>
       */}
    </div>
  );
}

export default App;
