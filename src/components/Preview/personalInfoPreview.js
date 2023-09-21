export default function PersonalInfoPreview({ personalInfo }) {

    return (
        <>
            <div className="personalInfo">
                <p id="firstName">{personalInfo.firstName}</p>
                <p id="lastName">{personalInfo.lastName}</p>
                <p id="email">Email: {personalInfo.email}</p>
                <p id="phone">Phone: {personalInfo.phone}</p>
                <a id="github" href={personalInfo.github}>Github: {personalInfo.github}</a>
                <a id="linkedin"href={personalInfo.linkedin}>Linkedin: {personalInfo.linkedin}</a>
            </div>
        </>
    )
}