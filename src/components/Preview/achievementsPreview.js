export default function AchievementsPreview({achievements}){
    return (
        <>
          <h3>Achievements</h3>
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