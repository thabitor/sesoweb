import { Link } from "react-router-dom";

function TeamMember(props) {
    return (
<div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src={props.img} alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteerPage">{props.name}</Link> </h2>
                                    <span>{props.role}</span>
                                    <ul>
                                        <li><Link to="/volunteerPage"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/volunteerPage"><i className="ti-twitter"></i></Link></li>
                                        <li><Link to="/volunteerPage"><i className="ti-google"></i></Link></li>
                                        <li><Link to="/volunteerPage"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default TeamMember;

