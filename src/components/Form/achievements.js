export default function Achievements({achievements, handleChange, addAchievement, removeAchievement}) {

    return (
        <div>

            <h2>Achievements</h2>

            {achievements.map((ach, index) => (
                <div key={index}>
                    <div>
                        <input type="text" name="achievement" placeholder="Achievement" value={ach.achievement} onChange={(e) => handleChange(e, index)} />
                    </div>
                    {achievements.length > 1 && <button onClick={() => removeAchievement(index)}>Remove</button>}
                </div>
            ))}
            <button onClick={addAchievement}>Add Achievement</button>
        </div>
    )
}