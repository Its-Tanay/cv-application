export default function porPreview({PosOfResp}){
    return (
        <>
          <h3>Position of Responsibility</h3>
          <ul>
                {PosOfResp.map((pos, index) => (
                    <li key={index}>
                    <div id="por-items">
                      <div id="left-por">
                        <p id="company">{pos.company}</p>
                        <p id="position">{pos.position}</p>
                      </div>
                      <div id="right-por">
                        <p id="Time">{pos.startDate} - {pos.endDate}</p>
                      </div>
                    </div>
                        <p id="expDesc">{pos.description}</p>
                    </li>
                ))}
          </ul>
        </>
      );
}