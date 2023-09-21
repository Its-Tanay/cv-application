export default function PersonalInfo({personalInfo, handleChange}){
    
    return(
        <>
                <input type="text" name="firstName" placeholder="First Name" value={personalInfo.firstName} onChange={handleChange}/>

                <input type="text" name="lastName" placeholder="Last Name" value={personalInfo.lastName} onChange={handleChange}/>

                <input type="text" name="email" placeholder="Email-ID" value={personalInfo.email} onChange={handleChange}/>

                <input type="text" name="phone" placeholder="Phone no." value={personalInfo.phone} onChange={handleChange}/>

                <input type="text" name="github" placeholder="Github" value={personalInfo.github} onChange={handleChange}/>

                <input type="text" name="linkedin" placeholder="LinkedIn" value={personalInfo.linkedin} onChange={handleChange}/>

        </>
    )
}