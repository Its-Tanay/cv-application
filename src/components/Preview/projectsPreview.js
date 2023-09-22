export default function ProjectsPreview({projects}){
    return (
        <>
          <h3>Projects</h3>
          <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                      <div id="proj-items">
                        <div id="left-proj">
                          <p id="projects">{project.title} - {project.techStack}</p>
                        </div>
                        <div id="right-proj">
                          <p id="links"><a href={project.liveLink} id="liveLink">demo</a> | <a href={project.githubLink} id="githubLink">git</a></p>
                        </div>
                      </div> 
                      <p id="projDesc">{project.description}</p>
                    </li>
                ))}
          </ul>
        </>
      );
}