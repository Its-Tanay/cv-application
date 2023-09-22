export default function ExperiencePreview({experiences}){
    return (
        <>
          <h3>Experience</h3>
          <ul>
                {experiences.map((experience, index) => (
                    <li key={index}>
                    <div id="exp-items">
                      <div id="left-exp">
                        <p id="company">{experience.company}</p>
                        <p id="position">{experience.position}</p>
                      </div> 
                      <div id="right-exp">
                        <p id="Time">{experience.from} - {experience.to}</p>
                      </div>
                    </div>
                    <p id="expDesc">{experience.description}</p>
                    </li>
                ))}
          </ul>
        </>
      );
}