export default function Experience({experiences, handleChange, addExperience, removeExperience}) {


  return (
    <div className="flex flex-col items-center gap-4 tablet:gap-6 laptop:gap-8">

      <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Experience</h2>

      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col gap-2 items-center tablet:gap-4 laptop:gap-6">
            <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
              <input className="inp" type="text" name="company" placeholder="Company" value={experience.company} onChange={(e) => handleChange(e, index)} />
              <input className="inp" type="text" name="position" placeholder="Position" value={experience.position} onChange={(e) => handleChange(e, index)} />
            </div>
            <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
              <input className="inp" type="text" name="from" placeholder="From" value={experience.from} onChange={(e) => handleChange(e, index)} />
              <input className="inp" type="text" name="to" placeholder="To" value={experience.to} onChange={(e) => handleChange(e, index)} />
            </div>
            <input className="inp w-[96%]" type="text" name="description" placeholder="Description" value={experience.description} onChange={(e) => handleChange(e, index)} />   
          {experiences.length > 1 && <button onClick={() => removeExperience(index)} className="rmv-btn">Remove</button>}
        </div>
      ))}

      <button onClick={addExperience} className="add-btn">Add Experience</button>

    </div>
  );
}
