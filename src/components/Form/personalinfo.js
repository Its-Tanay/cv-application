export default function PersonalInfo({personalInfo, handleChange}){
    
    return(
        <div className="flex flex-col items-center gap-4 tablet:gap-6 laptop:gap-8">

            <h2 className="text-xl tablet:text-2xl laptop:text-[2rem] ">Personal Information</h2>

            <div className="flex flex-col gap-2 tablet:gap-4 laptop:gap-6">
                <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                    <input className="inp" type="text" name="firstName" placeholder="First Name" value={personalInfo.firstName} onChange={handleChange}/>
                    <input className="inp" type="text" name="lastName" placeholder="Last Name" value={personalInfo.lastName} onChange={handleChange}/>
                </div>
                <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                    <input className="inp" type="text" name="email" placeholder="Email-ID" value={personalInfo.email} onChange={handleChange}/>
                    <input className="inp" type="text" name="phone" placeholder="Phone no." value={personalInfo.phone} onChange={handleChange}/>
                </div>
                <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                    <input className="inp" type="text" name="github" placeholder="Github" value={personalInfo.github} onChange={handleChange}/>
                    <input className="inp" type="text" name="linkedin" placeholder="LinkedIn" value={personalInfo.linkedin} onChange={handleChange}/>
                </div>
                <div className="flex items-center gap-2 mx-2 tablet:gap-4 laptop:gap-6">
                    <input className="inp" type="text" name="twitter" placeholder="Twitter" value={personalInfo.twitter} onChange={handleChange}/>
                    <input className="inp" type="text" name="portfolio" placeholder="Portfolio" value={personalInfo.portfolio} onChange={handleChange}/>
                </div>
            </div>

        </div>
    )
}