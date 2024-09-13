
import teamMembers from '../data/allTeam';
import TeamMember from './TeamMember';
import { useTranslation } from "react-i18next";


function TeamSSG (props) {

    const { t } = useTranslation();
    const Deptssg = teamMembers.filter((member) => member.dept === 'ssg')
    
    return (
        <div className={`wpo-team-area ${props.subclass} section-padding`} id="ssg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>{t('Services.serviceteam')}</span>
                            <h2>CAP / {t('Services.SSG')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                {Deptssg.map((teamMember) => {
                    return (

                        <TeamMember 
                     name={teamMember.name}
                     role={teamMember.role}
                     desc={teamMember.desc}
                     img={teamMember.img}
                     Key={teamMember.id}
                     />

                    )
                     
                })}    
                </div>
            </div>
        </div>
    )
}

export default TeamSSG;