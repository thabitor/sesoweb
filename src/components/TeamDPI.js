
import teamMembers from '../data/allTeam';
import TeamMember from './TeamMember';
import { useTranslation } from "react-i18next";


function TeamDPI (props) {
    
    const { t } = useTranslation();

    const DeptDPI = teamMembers.filter((member) => member.dept === 'dpi')
    const groups = [
        { title: t('Team.Groups.coordination'), members: DeptDPI.filter((member) => member.role === 'Coordination') },
        { title: t('Team.Groups.admin'), members: DeptDPI.filter((member) => member.role.includes('Coordination administrative')) },
        { title: t('Team.Groups.social'), members: DeptDPI.filter((member) => member.role === 'Équipe sociale') },
        { title: t('Team.Groups.mena'), members: DeptDPI.filter((member) => member.role === 'Équipe MENA') },
    ].filter((group) => group.members.length > 0);

    return (
        <div className={`wpo-team-area ${props.subclass} section-padding`} id="dpi">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>{t('Services.serviceteam')}</span>
                            <h2>{t('Services.DPI')}</h2>
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

export default TeamDPI;
