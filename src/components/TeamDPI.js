
import teamMembers from '../data/allTeam';
import TeamMember from './TeamMember';
import { useTranslation } from "react-i18next";


function TeamDPI (props) {
    
    const { t } = useTranslation();

    const DeptDPI = teamMembers.filter((member) => member.dept === 'dpi')

    return (
        <div className={`wpo-team-area ${props.subclass} section-padding`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>{t('Services.serviceteam')}</span>
                            <h2>{t('Services.DPI')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                {DeptDPI.map((teamMember) => {
                    return (

                        <TeamMember 
                     name={teamMember.name}
                     role={teamMember.role}
                     img={teamMember.img}
                     desc={teamMember.desc}
                     Key={teamMember.id}
                     />

                    )
                     
                })}    
                </div>
            </div>
        </div>
    )
}

export default TeamDPI;