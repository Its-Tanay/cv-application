export default function Education({education, handleChange, addEducation, removeEducation}){

    return(
        <div>

            <h2>Education</h2>

            {education.map((edu, index) => (
                <div key={index}>
                    <div>
                        <div>
                            <input type="text" name="school" placeholder="School" value={edu.school} onChange={(e) => handleChange(e, index)} />
                            <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <div>
                            <input type="text" name="city" placeholder="City/Country" value={edu.city} onChange={(e) => handleChange(e, index)} /> 
                        </div>
                        <div>
                            <input type="text" name="from" placeholder="From" value={edu.from} onChange={(e) => handleChange(e, index)} />
                            <input type="text" name="to" placeholder="To" value={edu.to} onChange={(e) => handleChange(e, index)} />
                        </div>
                    </div>
                    {education.length > 1 && <button onClick={() => removeEducation(index)} className="remove-button">Remove</button>}
                </div>
            ))}

            <button onClick={addEducation}>Add Education</button>

        </div>
    )
}