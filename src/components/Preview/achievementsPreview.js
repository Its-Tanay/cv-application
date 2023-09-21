export default function AchievementsPreview({achievements}){
    return (
        <>
          <h1>Achievements</h1>
          <ul>
                {achievements.map((ach, index) => (
                    <li key={index}>
                        <p id="achievement">{ach.achievement}</p>
                    </li>
                ))}
          </ul>
        </>
      );
}