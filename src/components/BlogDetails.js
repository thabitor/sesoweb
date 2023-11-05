import React from 'react';
import { Link } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'


const BlogSingle = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return(
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src='images/blog/img-4.jpg' alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/BlogDetails"><img src='images/blog/admin.jpg' alt=""/>  By Admin</Link></li>
                                    <li><Link to="/BlogDetails"><i className="ti-calendar"/> Jan 25,2021</Link></li>
                                    <li><Link to="/BlogDetails"><i className="ti-heart"/> 35</Link></li>
                                </ul>
                                <h2>Help the helpless who need you.</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </blockquote>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            </div>
                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <ul>
                                        <li><Link to="/BlogDetails">Business</Link></li>
                                        <li><Link to="/BlogDetails">Marketing</Link></li>
                                        <li><Link to="/BlogDetails">SEO</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    <ul>
                                        <li><Link to="/BlogDetails"><i className="ti-facebook"/></Link></li>
                                        <li><Link to="/BlogDetails"><i className="ti-twitter-alt"/></Link></li>
                                        <li><Link to="/BlogDetails"><i className="ti-instagram"/></Link></li>
                                    </ul>
                                </div>
                            </div> 
                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link to="/BlogDetails" target="_blank"><img src='images/blog-details/author.jpg' alt=""/></Link>
                                </div>
                                <div className="author-content">
                                    <Link to="/BlogDetails" ><div className="author-name">Henry Joyes</div></Link>
                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                    <div className="author-btn">
                                        <Link to="/BlogDetails">All Post From Author</Link>
                                    </div>
                                </div>
                            </div> 
                            <div className="more-posts clearfix">
                                <div className="previous-post">
                                    <Link to="/BlogDetails">
                                        <span className="post-control-link">Previous</span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link to="/BlogDetails">
                                        <span className="post-control-link">Next post</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="comments-area">
                            <div className="comments-section">
                                <h3 className="comments-title">Comments</h3>
                                <ol className="comments">
                                    <li className="comment even thread-even depth-1" id="comment-1">
                                        <div id="div-comment-1">
                                            <div className="comment-theme">
                                                <div className="comment-image"> <img src='images/blog-details/comments-author/img-1.jpg' alt=""/> </div>
                                            </div>
                                            <div className="comment-main-area">
                                                <div className="comment-wrapper">
                                                    <div className="comments-meta">
                                                        <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                    </div>
                                                    <div className="comment-area">
                                                        <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                        <div className="comments-reply">
                                                            <Link to="/BlogDetails"><div className="comment-reply-link"><i className="fa fa-reply" aria-hidden="true"/><span>Reply</span></div></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="children">
                                            <li className="comment">
                                                <div>
                                                    <div className="comment-theme">
                                                        <div className="comment-image"> <img src='images/blog-details/comments-author/img-2.jpg' alt=""/></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>Lily Watson <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link to="/BlogDetails"><div className="comment-reply-link"><span><i className="fa fa-reply" aria-hidden="true"/> Reply</span></div></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li className="comment">
                                                        <div>
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><img src='images/blog-details/comments-author/img-3.jpg' alt=""/> </div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                        <div className="comments-reply">
                                                                            <Link  to="/BlogDetails"><div className="comment-reply-link"><span><i className="fa fa-reply" aria-hidden="true"/> Reply</span></div></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div> 
                        <div className="comment-respond">
                            <h3 className="comment-reply-title">Leave a Comment</h3>
                            <form method="post" id="commentform" className="comment-form" onSubmit={submitHandler}>
                                <div className="form-inputs">
                                    <input placeholder="Name" type="text"/>
                                    <input placeholder="Email" type="email"/>
                                    <input placeholder="Website" type="url"/>
                                </div>
                                <div className="form-textarea">
                                    <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                </div>
                                <div className="form-submit">
                                    <input id="submit" value="Reply" type="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <BlogSidebar/>
                </div>
            </div>
        </section>
     )
        
}

export default BlogSingle;
