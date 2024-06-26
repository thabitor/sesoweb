import { Link } from 'react-router-dom'

const WorldSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-world-area ${props.worldclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-world-section">
                            <h2>Lets Chenge The World With Humanity</h2>
                            <Link onClick={ClickHandler} to="/volunteerPage"><img src='images/team/1.png' alt=""/>   Become A Volunteer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorldSection;