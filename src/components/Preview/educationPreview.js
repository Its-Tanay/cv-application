
export default function EducationPreview({ education }) {
  return (
    <>
      <h1>Education</h1>
        <ul>
            {education.map((edu, index) => (
                <li key={index}>
                <p id="school">{edu.school}</p>
                <p id="schoolCity">{edu.city}</p>
                <p id="degree">{edu.degree}</p>
                <p id="degreeTime">{edu.from} - {edu.to}</p>
                <p id="degreeDesc">{edu.description}</p>
                </li>
            ))}
      </ul>
    </>
  );
}