export default function Experience({experiences, handleChange, addExperience, removeExperience}) {


  return (
    <div className="input-section">
      {experiences.map((experience, index) => (
        <div key={index}>
          <div className="inputs">
            <div className="name-pos">
              <input type="text" name="company" placeholder="Company" value={experience.company} onChange={(e) => handleChange(e, index)} />
              <input type="text" name="position" placeholder="Position" value={experience.position} onChange={(e) => handleChange(e, index)} />
            </div>
            <div className="to-from">
              <input type="text" name="from" placeholder="From" value={experience.from} onChange={(e) => handleChange(e, index)} />
              <input type="text" name="to" placeholder="To" value={experience.to} onChange={(e) => handleChange(e, index)} />
            </div>
            <input type="text" name="description" placeholder="Description" value={experience.description} onChange={(e) => handleChange(e, index)} />
          </div>
          {experiences.length > 1 && <button onClick={() => removeExperience(index)} className="remove-button">Remove</button>}
        </div>
      ))}
      <button onClick={addExperience} className="add-button">Add Experience</button>
    </div>
  );
}
