import { useState } from 'react';
import expIcon from '../../assets/expand.svg';
import antiIcon from '../../assets/anti.svg';
export default function Projects({projects, handleChange, addProject, removeProject}){

    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(!expand);
    }

    return(
        <>

            {expand ? (
                <div className="form-sec">
                    <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Projects</h2>

                    <button onClick={handleExpand}>
                        <img src={antiIcon} alt="anti" />
                    </button>

                    {projects.map((pro, index) => (
                        <div key={index} className="flex flex-col gap-2 items-center tablet:gap-4 laptop:gap-6">
                                <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                                    <input className="inp" type="text" name="title" placeholder="Project Title" value={pro.title} onChange={(e) => handleChange(e, index)} />
                                    <input className="inp" type="text" name="techStack" placeholder="Tech Stack" value={pro.techStack} onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                                    <input className="inp" type="text" name="githubLink" placeholder="Github Link" value={pro.githubLink} onChange={(e) => handleChange(e, index)} />
                                    <input className="inp" type="text" name="liveLink" placeholder="Live Link" value={pro.liveLink} onChange={(e) => handleChange(e, index)} />
                                </div>
                                <input className="inp w-[96%]" type="text" name="description" placeholder="Description" value={pro.description} onChange={(e) => handleChange(e, index)} />
                                {projects.length > 1 && <button onClick={() => removeProject(index)} className="rmv-btn">Remove</button>}
                        </div>
                    ))}
                    <button onClick={addProject} className="add-btn">Add Project</button> 
                </div>
            ) : (
                <div className="exp-sec">
                    <h2 className="text-sm tablet:text-2xl laptop:text-[2rem]">Projects</h2>

                    <button onClick={handleExpand}>
                        <img src={expIcon} alt="expand" />
                    </button>
                </div>
            )}

        </>
    )
}

/*  <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Projects</h2>

            {projects.map((pro, index) => (
                <div key={index} className="flex flex-col gap-2 items-center tablet:gap-4 laptop:gap-6">
                        <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                            <input className="inp" type="text" name="title" placeholder="Project Title" value={pro.title} onChange={(e) => handleChange(e, index)} />
                            <input className="inp" type="text" name="techStack" placeholder="Tech Stack" value={pro.techStack} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                            <input className="inp" type="text" name="githubLink" placeholder="Github Link" value={pro.githubLink} onChange={(e) => handleChange(e, index)} />
                            <input className="inp" type="text" name="liveLink" placeholder="Live Link" value={pro.liveLink} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <input className="inp w-[96%]" type="text" name="description" placeholder="Description" value={pro.description} onChange={(e) => handleChange(e, index)} />
                        {projects.length > 1 && <button onClick={() => removeProject(index)} className="rmv-btn">Remove</button>}
                </div>
            ))}
            <button onClick={addProject} className="add-btn">Add Project</button> 
*/