import TeamMember from './TeamMember';
import { useState } from 'react';
import team from '../data/team';

function TeamSection (props) {

    
    const [teamMembers] = useState(team)
    return (
        <div className={`wpo-team-area ${props.subclass} section-padding`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Notre</span>
                            <h2>Equipe</h2>
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
                     />

                    )
                     
                })}    
                </div>
            </div>
        </div>
    )
}

export default TeamSection;