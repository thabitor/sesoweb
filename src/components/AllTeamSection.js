import TeamMember from './TeamMember';
import { useState } from 'react';
import team from '../data/allTeam';
import { useTranslation } from 'react-i18next';

function TeamSection (props) {

    const {t} = useTranslation();
    const [teamMembers] = useState(team)
    return (
        <div className={`wpo-team-area ${props.subclass} section-padding`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span></span>
                            <h2>{t('main.header.navItems.OurTeam')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                {teamMembers.map((teamMember) => {
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

export default TeamSection;