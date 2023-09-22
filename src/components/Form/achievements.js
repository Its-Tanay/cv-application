export default function Achievements({achievements, handleChange, addAchievement, removeAchievement}) {

    return (
        <div className="input-section">
            {achievements.map((ach, index) => (
                <div key={index}>
                    <div className="inputs">
                        <input type="text" name="achievement" placeholder="Achievement" value={ach.achievement} onChange={(e) => handleChange(e, index)} />
                    </div>
                    {achievements.length > 1 && <button onClick={() => removeAchievement(index)} className="remove-button">Remove</button>}
                </div>
            ))}
            <button onClick={addAchievement} className="add-button">Add Achievement</button>
        </div>
    )
}