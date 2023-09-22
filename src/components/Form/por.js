export default function PosOfResp({posOfResp, handleChange, addPosOfResp, removePosOfResp}){

    return(
        <div className="input-section">
            {posOfResp.map((por, index) => (
                <div key={index}>
                    <div className="inputs">
                        <div className="name-pos">
                            <input type="text" name="company" placeholder="Company" value={por.company} onChange={(e) => handleChange(e, index)} />
                            <input type="text" name="position" placeholder="Position" value={por.position} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <div className="to-from">
                            <input type="text" name="startDate" placeholder="Start Date" value={por.startDate} onChange={(e) => handleChange(e, index)} />
                            <input type="text" name="endDate" placeholder="End Date" value={por.endDate} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <input type="text" name="description" placeholder="Description" value={por.description} onChange={(e) => handleChange(e, index)} />
                    </div>
                    {posOfResp.length > 1 && <button onClick={() => removePosOfResp(index)} className="remove-button">Remove</button>}
                </div>
            ))}
            <button onClick={addPosOfResp} className="add-button">Add Position of Responsibility</button>
        </div>
    )
}
