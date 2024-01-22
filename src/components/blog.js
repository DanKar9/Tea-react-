import blog1 from './../images/blog1.png'
import blog2 from './../images/blog2.png'
import blog3 from './../images/blog3.png'
import blog4 from './../images/blog4.png'



function Blog() {
    return (

        <div className="blog">
            <div className="container">
                <div className="title_blog">Our Tea Blog</div>
                <div className="blog_inner">
                    <div className="blog_info">
                        <div className="blog_left">
                            <img src={blog1} alt=""></img>
                        </div>
                        <div className="blog_right">
                            <div className="blog_title">Tea Time Travels: Funny Moments from Around the World</div>
                            <div className="blog_name">by Robinson Crusoe</div>
                            <bottom className='blog_btn' variant="contained" >Read ></bottom>
                        </div>
                    </div>

                    <div className="blog_info">
                        <div className="blog_left">
                            <img src={blog2} alt=""></img>
                        </div>
                        <div className="blog_right">
                            <div className="blog_title">The Role of Tea in Mental Health</div>
                            <div className="blog_name">by Joker</div>
                            <bottom className='blog_btn' variant="contained" >Read ></bottom>
                        </div>
                    </div>

                    <div className="blog_info">
                        <div className="blog_left">
                            <img src={blog3} alt=""></img>
                        </div>
                        <div className="blog_right">
                            <div className="blog_title">Tea-rific Tales: Hilarious Stories from Tea Lovers</div>
                            <div className="blog_name">by Casper the Friendly Ghost</div>
                            <bottom className='blog_btn'>Read ></bottom>
                        </div>
                    </div>

                    <div className="blog_info">
                        <div className="blog_left">
                            <img src={blog4} alt=""></img>
                        </div>
                        <div className="blog_right">
                            <div className="blog_title">Tea and Caffeine: Effects on the Brain and Behavior</div>
                            <div className="blog_name">by Author Authorius</div>
                            <bottom className='blog_btn'>Read ></bottom>
                        </div>
                    </div>
                </div>
                <div className='centre'>

                <button className='blog_viewBtn' variant="contained">View all</button>
                </div>
            </div>
        </div>
    )
}

export default Blog
