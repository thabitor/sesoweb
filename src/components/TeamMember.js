function getInitials(name) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase();
}

function TeamMember(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
            <div className="wpo-team-wrap">
                <div className="team-avatar" aria-hidden="true">
                    {getInitials(props.name)}
                </div>
                <div className="wpo-team-content">
                    <div className="wpo-team-text-sub">
                        <h2>{props.name}</h2>
                        <span>{props.role}</span>
                        {props.desc ? (
                            <ul>
                                <li>{props.desc}</li>
                            </ul>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;
