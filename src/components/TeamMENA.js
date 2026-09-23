
import teamMembers from '../data/allTeam';
import TeamMember from './TeamMember';
import { useTranslation } from "react-i18next";



function TeamMENA (props) {

    const { t } = useTranslation();
    const DeptMENA = teamMembers.filter((member) => member.dept === 'mena')
    const groups = [
        { title: t('Team.Groups.coordination'), members: DeptMENA.filter((member) => member.role === 'Coordination') },
        { title: t('Team.Groups.tutors'), members: DeptMENA.filter((member) => member.role.includes('Tuteur')) },
        { title: t('Team.Groups.assistant'), members: DeptMENA.filter((member) => member.role.includes('Assistant administratif')) },
    ].filter((group) => group.members.length > 0);

    return (
        <div className={`wpo-team-area ${props.subclass} section-padding`} id="mena">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>{t('Services.serviceteam')}</span>
                            <h2>{t('Services.MENA')}</h2>
                        </div>
                    </div>
                </div>
                {groups.map((group) => (
                    <div className="team-role-group" key={group.title}>
                        <h3>{group.title}</h3>
                        <div className="row justify-content-md-center">
                            {group.members.map((teamMember) => (
                                <TeamMember 
                                    name={teamMember.name}
                                    role={teamMember.role}
                                    img={teamMember.img}
                                    desc={teamMember.desc}
                                    key={teamMember.id}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamMENA;
