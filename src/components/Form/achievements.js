export default function Achievements({achievements, setAchievements, handleChange, addAchievement, removeAchievement}) {

    return (
        <>
            {achievements.map((ach, index) => (
                <div key={index}>
                    <input type="text" name="achievement" placeholder="Achievement" value={ach.achievement} onChange={(e) => handleChange(e, index)} />
                    {achievements.length > 1 && <button onClick={() => removeAchievement(index)}>Remove</button>}
                </div>
            ))}
            <button onClick={addAchievement}>Add Achievement</button>
        </>
    )
}