
export default function EducationPreview({ education }) {
  return (
    <>
      <h3>Education</h3>
        <ul>
        {education.map((edu, index) => (
            <li key={index}>
            <div id="ed-items">
              <div id="left-ed">
                <p id="school">{edu.school}</p>
                <p id="degree">{edu.degree}</p>
              </div>
              <div id="right-ed">
                <p id="schoolCity">{edu.city}</p>
                <p id="degreeTime">{edu.from} - {edu.to}</p>
              </div>
            </div>
            </li>
        ))}
      </ul>
    </>
  );
}