import { Link } from 'react-router-dom'


const SidebarWrap = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-12">
            <div className="wpo-blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/img-1.jpg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/BlogDetails">Many Children are suffering a lot for food.</Link></h4>
                                <span className="date">22 Jan 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/img-2.jpg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/BlogDetails">Be kind for the poor people and the kids.</Link></h4>
                                <span className="date">22 Jan 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/img-3.jpg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/BlogDetails">Be soft and kind for the poor people.</Link></h4>
                                <span className="date">22 Jan 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link to="/BlogDetails">Donations</Link></li>
                        <li><Link to="/BlogDetails">Charity</Link></li>
                        <li><Link to="/BlogDetails">Help</Link></li>
                        <li><Link to="/BlogDetails">Non Profit</Link></li>
                        <li><Link to="/BlogDetails">Poor People</Link></li>
                        <li><Link to="/BlogDetails">Helping Hand</Link></li>
                        <li><Link to="/BlogDetails">Video</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default SidebarWrap;
