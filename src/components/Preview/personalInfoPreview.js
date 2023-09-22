export default function PersonalInfoPreview({ personalInfo }) {

    return (
        <>
            <div id="left-pi">
                
                <p id="name">{personalInfo.firstName} {personalInfo.lastName}</p>
                <div id="address">
                    <p id="email">Email: <a href={personalInfo.email}>{personalInfo.email}</a></p>
                    <p id="phone">Phone: {personalInfo.phone}</p>
                </div>
            </div>
            <div id="right-pi">
                <p>Github: <a id="github-link" href={personalInfo.github}>{personalInfo.github}</a></p>
                <p>Linkedin: <a id="linkedin-link"href={personalInfo.linkedin}>{personalInfo.linkedin}</a></p>
                <p>Twitter: <a id="twitter-link"href={personalInfo.twitter}>{personalInfo.twitter}</a></p>
                <p>Portfolio: <a id="portfolio-link"href={personalInfo.portfolio}>{personalInfo.portfolio}</a></p>
            </div>
        </>
    )
}