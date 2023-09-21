export default function porPreview({PosOfResp}){
    return (
        <>
          <h1>Position of Responsibility</h1>
          <ul>
                {PosOfResp.map((pos, index) => (
                    <li key={index}>
                        <p id="Company">{pos.company}</p>
                        <p id="position">{pos.position}</p>
                        <p id="Time">{pos.startDate} - {pos.endDate}</p>
                        <p id="Desc">{pos.description}</p>
                    </li>
                ))}
          </ul>
        </>
      );
}