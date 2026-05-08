import teamMembers from '../data/allTeam';
import TeamMember from './TeamMember';
import { useTranslation } from "react-i18next";

function TeamREAB(props) {
    const { t } = useTranslation();
    const members = teamMembers.filter((member) => member.dept === 'reab');

    return (
        <div className={`wpo-team-area ${props.subclass} section-padding`} id="reab">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>{t('Services.serviceteam')}</span>
                            <h2>{t('Services.REAB')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    {members.map((teamMember) => (
                        <TeamMember
                            name={teamMember.name}
                            role={teamMember.role}
                            desc={teamMember.desc}
                            key={teamMember.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamREAB;
