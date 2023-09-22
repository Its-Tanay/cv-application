export default function PersonalInfo({personalInfo, handleChange}){
    
    return(
        <div id="personalInfo-input">
        
            <div id="name">
                <input type="text" name="firstName" placeholder="First Name" value={personalInfo.firstName} onChange={handleChange}/>
                <input type="text" name="lastName" placeholder="Last Name" value={personalInfo.lastName} onChange={handleChange}/>
            </div>
            <div id="email-phone">
                <input type="text" name="email" placeholder="Email-ID" value={personalInfo.email} onChange={handleChange}/>
                <input type="text" name="phone" placeholder="Phone no." value={personalInfo.phone} onChange={handleChange}/>
            </div>
            <div id="tech-profile">
                <input type="text" name="github" placeholder="Github" value={personalInfo.github} onChange={handleChange}/>
                <input type="text" name="linkedin" placeholder="LinkedIn" value={personalInfo.linkedin} onChange={handleChange}/>
            </div>
            <div id="socials">
                <input type="text" name="twitter" placeholder="Twitter" value={personalInfo.twitter} onChange={handleChange}/>
                <input type="text" name="portfolio" placeholder="Portfolio" value={personalInfo.portfolio} onChange={handleChange}/>
            </div>
        </div>
    )
}