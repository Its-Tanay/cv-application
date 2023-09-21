export default function Projects({projects, setProjects, handleChange, addProject, removeProject}){

    return(
        <>
            {projects.map((pro, index) => (
                <div key={index}>
                    <input type="text" name="title" placeholder="Project Title" value={pro.project} onChange={(e) => handleChange(e, index)} />
                    <input type="text" name="techStack" placeholder="Tech Stack" value={pro.techStack} onChange={(e) => handleChange(e, index)} />
                    <input type="text" name="description" placeholder="Description" value={pro.description} onChange={(e) => handleChange(e, index)} />
                    <input type="text" name="gitlink" placeholder="Github Link" value={pro.gitlink} onChange={(e) => handleChange(e, index)} />
                    <input type="text" name="livelink" placeholder="Live Link" value={pro.livelink} onChange={(e) => handleChange(e, index)} />
                    {projects.length > 1 && <button onClick={() => removeProject(index)}>Remove</button>}
                </div>
            ))}
            <button onClick={addProject}>Add Project</button>
        </>
    )
}