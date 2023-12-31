import { useState } from "react"
import expIcon from '../../assets/expand.svg';
import antiIcon from '../../assets/anti.svg';

export default function Education({education, handleChange, addEducation, removeEducation}){

    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(!expand);
    }

    return(
        <>

            {expand ? (
                <div className="form-sec">
                    <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Education</h2>

                    <button onClick={handleExpand}>
                        <img src={antiIcon} alt="anti" />
                    </button>
                    {education.map((edu, index) => (
                        <div key={index} className="flex flex-col gap-2 items-center tablet:gap-4 laptop:gap-6">
                                <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                                    <input className="inp" type="text" name="school" placeholder="School" value={edu.school} onChange={(e) => handleChange(e, index)} />
                                    <input className="inp" type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                                    <input className="inp" type="text" name="city" placeholder="City/Country" value={edu.city} onChange={(e) => handleChange(e, index)} /> 
                                </div>
                                <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                                    <input className="inp" type="text" name="from" placeholder="From" value={edu.from} onChange={(e) => handleChange(e, index)} />
                                    <input className="inp" type="text" name="to" placeholder="To" value={edu.to} onChange={(e) => handleChange(e, index)} />
                                </div>
                            {education.length > 1 && <button onClick={() => removeEducation(index)} className="rmv-btn">Remove</button>}

                        </div>
                    ))}

                    <button onClick={addEducation} className="add-btn">Add Education</button>

                </div>) : (
                <div className="exp-sec">
                    <h2 className="text-sm tablet:text-2xl laptop:text-[2rem]">Education</h2>

                    <button onClick={handleExpand}>
                        <img src={expIcon} alt="expand" />
                    </button>

                </div>
            )}
        </>
    )
}

/*
        <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Education</h2>

            {education.map((edu, index) => (
                <div key={index} className="flex flex-col gap-2 items-center tablet:gap-4 laptop:gap-6">
                        <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                            <input className="inp" type="text" name="school" placeholder="School" value={edu.school} onChange={(e) => handleChange(e, index)} />
                            <input className="inp" type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                            <input className="inp" type="text" name="city" placeholder="City/Country" value={edu.city} onChange={(e) => handleChange(e, index)} /> 
                        </div>
                        <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                            <input className="inp" type="text" name="from" placeholder="From" value={edu.from} onChange={(e) => handleChange(e, index)} />
                            <input className="inp" type="text" name="to" placeholder="To" value={edu.to} onChange={(e) => handleChange(e, index)} />
                        </div>
                    {education.length > 1 && <button onClick={() => removeEducation(index)} className="rmv-btn">Remove</button>}

                </div>
            ))}

            <button onClick={addEducation} className="add-btn">Add Education</button>
*/