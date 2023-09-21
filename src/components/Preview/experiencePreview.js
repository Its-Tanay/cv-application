export default function ExperiencePreview({experiences}){
    return (
        <>
          <h1>Experience</h1>
          <ul>
                {experiences.map((experience, index) => (
                    <li key={index}>
                    <p id="company">{experience.company}</p>
                    <p id="position">{experience.position}</p>
                    <p id="Time">{experience.from} - {experience.to}</p>
                    <p id="Desc">{experience.description}</p>
                    </li>
                ))}
          </ul>
        </>
      );
}