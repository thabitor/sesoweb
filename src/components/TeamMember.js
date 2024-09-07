import { Link } from "react-router-dom";

function TeamMember(props) {
    return (
<div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap" >
                            {/* <div className="wpo-team-img">
                                <img src={props.img} alt="" />
                            </div> */}
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2>{props.name}</h2>
                                    <span>{props.role}</span>
                                    <ul>
                                        <li>{props.desc}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default TeamMember;

