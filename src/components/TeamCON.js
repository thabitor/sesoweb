
import teamMembers from '../data/allTeam';
import TeamMember from './TeamMember';
import { useTranslation } from "react-i18next";


function TeamCON (props) {

    const { t } = useTranslation();

    const DeptCON = teamMembers.filter((member) => member.dept === 'con')

    return (
        <div className={`wpo-team-area ${props.subclass} section-padding`} id="con">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span></span>
                            <h2>{t('Services.board')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                {DeptCON.map((teamMember) => {
                    return (

                        <TeamMember 
                     name={teamMember.name}
                     role={teamMember.role}
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

export default TeamCON;