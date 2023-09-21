export default function ProjectsPreview({projects}){
    return (
        <>
          <h1>Projects</h1>
          <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <p id="project">{project.title}</p>
                        <p id="techStack">{project.techStack}</p>
                        <p>
                            <a href={project.liveLink} id="liveLink">demo</a> | <a href={project.githubLink} id="githubLink">git</a>
                        </p>
                        <p id="desc">{project.description}</p>
                    </li>
                ))}
          </ul>
        </>
      );
}