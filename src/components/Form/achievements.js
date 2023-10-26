export default function Achievements({achievements, handleChange, addAchievement, removeAchievement}) {

    return (
        <div className="flex flex-col items-center gap-4 tablet:gap-6 laptop:gap-8">

            <h2 className="text-xl tablet:text-2xl laptop:text-[2rem]">Achievements</h2>

            {achievements.map((ach, index) => (
                <div key={index} className="flex flex-col gap-2 items-center tablet:gap-4 laptop:gap-6">
                    <input className="inp" type="text" name="achievement" placeholder="Achievement" value={ach.achievement} onChange={(e) => handleChange(e, index)} />
                    {achievements.length > 1 && <button onClick={() => removeAchievement(index)} className="rmv-btn">Remove</button>}
                </div>
            ))}
            <button onClick={addAchievement} className="add-btn w-full">Add Achievement</button>
        </div>
    )
}