import { Link } from 'react-router-dom'

const CtaSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-cta-area ${props.ctaclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-cta-text">
                            <h2>You Can Help The Poor With Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse </p>
                            <div className="btns">
                                <Link onClick={ClickHandler}  to="/DonatePage"><div className="theme-btn">Donate Now</div></Link>
                                <Link onClick={ClickHandler} to="/"><div className="theme-btn-s2">Join Us Now</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;