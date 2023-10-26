export default function Projects({projects, handleChange, addProject, removeProject}){

    return(
        <div>

            <h2>Projects</h2>

            {projects.map((pro, index) => (
                <div key={index}>
                    <div>
                        <div>
                            <input type="text" name="title" placeholder="Project Title" value={pro.title} onChange={(e) => handleChange(e, index)} />
                            <input type="text" name="techStack" placeholder="Tech Stack" value={pro.techStack} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <div>
                            <input type="text" name="githubLink" placeholder="Github Link" value={pro.githubLink} onChange={(e) => handleChange(e, index)} />
                            <input type="text" name="liveLink" placeholder="Live Link" value={pro.liveLink} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <input type="text" name="description" placeholder="Description" value={pro.description} onChange={(e) => handleChange(e, index)} />
                    </div>
                        {projects.length > 1 && <button onClick={() => removeProject(index)}>Remove</button>}
                </div>
            ))}
            <button onClick={addProject}>Add Project</button>
        </div>
    )
}