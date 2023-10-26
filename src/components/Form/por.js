import { useState } from "react"
import expIcon from '../../assets/expand.svg';
import antiIcon from '../../assets/anti.svg';

export default function PosOfResp({posOfResp, handleChange, addPosOfResp, removePosOfResp}){

    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(!expand);
    }

    return(
        <>

            {expand ? (
                <div className="form-sec">
                    <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Position of Responsibility</h2>

                    <button onClick={handleExpand}>
                        <img src={antiIcon} alt="anti" />
                    </button>

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
            ) : (
                <div className="exp-sec">
                    <h2 className="text-sm tablet:text-2xl laptop:text-[2rem]">Position of Responsibility</h2>
                    <button onClick={handleExpand}>
                        <img src={expIcon} alt="expand" />
                    </button>
                </div>
            )}

        </>
    )
}

/*          <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Position of Responsibility</h2>

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
*/
