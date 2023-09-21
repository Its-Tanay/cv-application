export default function PosOfResp({posOfResp, handleChange, addPosOfResp, removePosOfResp}){

    return(
        <>
            {posOfResp.map((por, index) => (
                <div key={index}>
                    <input type="text" name="position" placeholder="Position" value={por.position} onChange={(e) => handleChange(e, index)} />
                    <input type="text" name="company" placeholder="Company" value={por.company} onChange={(e) => handleChange(e, index)} />
                    <input type="text" name="startDate" placeholder="Start Date" value={por.startDate} onChange={(e) => handleChange(e, index)} />
                    <input type="text" name="endDate" placeholder="End Date" value={por.endDate} onChange={(e) => handleChange(e, index)} />
                    <input type="text" name="description" placeholder="Description" value={por.description} onChange={(e) => handleChange(e, index)} />
                    {PosOfResp.length > 1 && <button onClick={() => removePosOfResp(index)}>Remove</button>}
                </div>
            ))}
            <button onClick={addPosOfResp}>Add Position of Responsibility</button>
        </>
    )
}
