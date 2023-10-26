export default function PosOfResp({posOfResp, handleChange, addPosOfResp, removePosOfResp}){

    return(
        <div className="flex flex-col items-center gap-4 tablet:gap-6 laptop:gap-8">

        <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Position of Responsibility</h2>

            {posOfResp.map((por, index) => (
                <div key={index} className="flex flex-col gap-2 items-center tablet:gap-4 laptop:gap-6">
                        <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                            <input className="inp" type="text" name="company" placeholder="Company" value={por.company} onChange={(e) => handleChange(e, index)} />
                            <input className="inp" type="text" name="position" placeholder="Position" value={por.position} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                            <input className="inp" type="text" name="startDate" placeholder="Start Date" value={por.startDate} onChange={(e) => handleChange(e, index)} />
                            <input className="inp" type="text" name="endDate" placeholder="End Date" value={por.endDate} onChange={(e) => handleChange(e, index)} />
                        </div>
                        <input className="inp w-[96%]" type="text" name="description" placeholder="Description" value={por.description} onChange={(e) => handleChange(e, index)} />
                    {posOfResp.length > 1 && <button onClick={() => removePosOfResp(index)} className="rmv-btn">Remove</button>}
                </div>
            ))}
            <button onClick={addPosOfResp} className="add-btn">Add POR</button>
        </div>
    )
}
