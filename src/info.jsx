import './info.css'

function Cards(props){
    return(
        <div className="big-container">
            <img src={props.img} className='card-img'/>
            <div className="card-info">
                <h3 className='crime-type'>{props.type}</h3>
                <p className="card-discription">{props.description}</p>
                <a className='card-url' href={props.url}>For More Information Click Here</a>
            </div>
        </div>
    )
}

export default function Info(){
    return(

        <div>

        <div className="Cards-container">
            <Cards 
             img="../images/cyberHack.jpg"
             type="Hacking"
             description="Hacking is the activity of identifying weaknesses in a computer system or a network
             to exploit the security to gain access to personal data or business data. An example of computer
             hacking can be: using a password cracking algorithm to gain access to a computer system. Computers
             have become mandatory to run a successful businesses."
             url="https://www.fortinet.com/resources/cyberglossary/what-is-hacking"
            />

            <Cards 
             img="../images/../images/cyberH.jpg"
             type="Password Attacks"
             description="It's a type of cyberattack where hackers attempt to access a file, folder, account, or
             computer secured with a password. It's generally done with the help of software that expedites
             cracking or guessing passwords.
             "
             url="https://www.1kosmos.com/authentication/password-attacks/"
            />

            <Cards 
             img="../images/cyberPHISHING.jpg"
             type="Phishing"
             description="Phishing is a cyber crime that leverages deceptive emails, websites, and text messages
             to steal confidential personal and corporate information. Victims are tricked into giving up
             personal information such as their credit card data, phone number, mailing address, company information, etc."
             url="https://www.imperva.com/learn/application-security/phishing-attack-scam/"
            />

            <Cards 
             img="../images/cyberSPOOF.jpg"
             type="Spoofing"
             description="Website spoofing is a scam where cyber criminals create a website that closely resembles
             a trusted brand as well as a domain that is virtually identical to a brand's web domain.
             The goal of website spoofing is to lure a brand's customers, suppliers,
             partners and employees to a fraudulent website and convince them to share sensitive information like login
             credentials, Social Security numbers, credit card information or bank account numbers."
             url="https://www.investopedia.com/terms/s/spoofing.asp"
            />

            <Cards 
             img="../images/malware.webp"
             type="Malware"
             description="A malware attack is a common cyberattack where malware (normally malicious software)
             executes unauthorized actions on the victim's system. The malicious software (a.k.a. virus)
             encompasses many specific types of attacks such as ransomware, spyware,
             command and control, and more."
             url="https://www.sentinelone.com/cybersecurity-101/what-is-malware-everything-you-need-to-know/?utm_content=demo-request&utm_medium=paid-search&utm_source=Google-Paid&utm_campaign=apj-t1-en-g-s-dsa-rlsa&utm_term=&utm_campaignid=19545478229&gclid=EAIaIQobChMIrc7k1qPl_AIVWjErCh25bAMOEAAYAiAAEgJyZPD_BwE"
            />

            <Cards 
             img="../images/cyberSQL.jpg"
             type="SQL Injection"
             description="SQL injection, also known as SQLI, is a common attack vector that uses
             malicious SQL code for backend database manipulation to access information that was
             not intended to be displayed.This information may include any number of items,
             including sensitive company data, user lists or private customer details."
             url="https://www.acunetix.com/websitesecurity/sql-injection/"
            />

            <Cards 
             img="../images/cyberCCF.jpg"
             type="Credit Card Fraud"
             description="Credit card fraud refers to using a credit card to obtain money or goods fraudulently.
             Thieves may steal a credit card, copy the number off a credit card, or take over a victim's
             account and have the credit card mailed to their (the criminal's) address."
             url="https://www.bajajfinserv.in/credit-card-fraud-in-india"
            />

            <Cards 
             img="../images/cyberSE.jpeg"
             type="Social Engineering"
             description="Social engineering is the art of manipulating, influencing, or deceiving you in order to
             gain control over your computer system. The hacker might use the phone, email, snail mail or
             direct contact to gain illegal access. Phishing, spear phishing, and CEO Fraud are all examples."
             url="https://www.imperva.com/learn/application-security/social-engineering-attack/"
            />

            <Cards 
             img="../images/cyberR.jpg"
             type="Ransomware"
             description="Ransomware is one of the biggest cybersecurity problems on the internet and one of the biggest
             forms of cybercrime that organisations face today. Ransomware is a form of malicious
             software malware that encrypts files and documents on anything from a brsingle PC all
             the way up to an entire network, including servers."
             url="https://www.malwarebytes.com/ransomware"
            />

         </div>
         <div>
         <footer>
        <h2>Mini-Project</h2>
        <h3>Team-members:</h3>
        <ul>
          <li>Gaven Dcosta</li>
        </ul>
        <ul>
          <li>Niraj Pingale</li>
        </ul>
        <ul>
          <li>Manish Patil</li>
        </ul>
        <p>Main Goal off our Team is to Protect You From Harmful Websites and to increase your knowledge on cyber crime</p>
      </footer>
         </div>
        </div>

    )
}