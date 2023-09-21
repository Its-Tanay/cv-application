export default function Experience({experiences, handleChange, addExperience, removeExperience}) {


  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index}>
          <input type="text" name="company" placeholder="Company" value={experience.company} onChange={(e) => handleChange(e, index)} />
          <input type="text" name="position" placeholder="Position" value={experience.position} onChange={(e) => handleChange(e, index)} />
          <input type="text" name="from" placeholder="From" value={experience.from} onChange={(e) => handleChange(e, index)} />
          <input type="text" name="to" placeholder="To" value={experience.to} onChange={(e) => handleChange(e, index)} />
          <input type="text" name="description" placeholder="Description" value={experience.description} onChange={(e) => handleChange(e, index)} />
          {experiences.length > 1 && <button onClick={() => removeExperience(index)}>Remove</button>}
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </>
  );
}
