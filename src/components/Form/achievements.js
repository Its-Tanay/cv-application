import { useState } from "react";
import expIcon from '../../assets/expand.svg';
import antiIcon from '../../assets/anti.svg';

export default function Achievements({achievements, handleChange, addAchievement, removeAchievement}) {

    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(!expand);
    }

    return (
        <>  
            {expand ? (
                <div className="form-sec">
                    <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Achievements</h2>

                    <button onClick={handleExpand}>
                        <img src={antiIcon} alt="anti" />
                    </button>

                    {achievements.map((ach, index) => (
                        <div key={index} className="flex flex-col gap-2 items-center tablet:gap-4 laptop:gap-6">
                            <input className="inp" type="text" name="achievement" placeholder="Achievement" value={ach.achievement} onChange={(e) => handleChange(e, index)} />
                            {achievements.length > 1 && <button onClick={() => removeAchievement(index)} className="rmv-btn">Remove</button>}
                        </div>
                    ))}
                    <button onClick={addAchievement} className="add-btn w-full">Add Achievement</button>
                </div>
            ) : (
                <div className="exp-sec">
                    <h2 className="text-sm tablet:text-2xl laptop:text-[2rem]">Achievements</h2>

                    <button onClick={handleExpand}>
                        <img src={expIcon} alt="expand" />
                    </button>
                </div>
            )}
        </>
    )
}

/*
        <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Achievements</h2>

        {achievements.map((ach, index) => (
            <div key={index} className="flex flex-col gap-2 items-center tablet:gap-4 laptop:gap-6">
                <input className="inp" type="text" name="achievement" placeholder="Achievement" value={ach.achievement} onChange={(e) => handleChange(e, index)} />
                {achievements.length > 1 && <button onClick={() => removeAchievement(index)} className="rmv-btn">Remove</button>}
            </div>
        ))}
        <button onClick={addAchievement} className="add-btn w-full">Add Achievement</button>

*/ 