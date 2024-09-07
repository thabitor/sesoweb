
import teamMembers from '../data/allTeam';
import TeamMember from './TeamMember';
import { useTranslation } from "react-i18next";


function TeamDir (props) {

    const { t } = useTranslation();

    const DeptDir = teamMembers.filter((member) => member.dept === 'dir')

    return (
        <div className={`wpo-team-area ${props.subclass} section-padding`} id="dir">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span></span>
                            <h2>{t('Team.RolesM.Director')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                {DeptDir.map((teamMember) => {
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

export default TeamDir;