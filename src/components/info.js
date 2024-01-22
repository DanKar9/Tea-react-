function Info() {
    return ( 
        <div className="info">
            <div className="container">
                <div className="title_blog">Want to know more?</div>
                <div className="info_inner">
                    <div className="info_left">Join our mailing list and stay up-to-date with the latest news, promotions, and exclusive offers from our tea store. Be the first to know about new tea arrivals, seasonal blends, and special discounts. Don't miss out on the tea-rrific perks - sign up today!</div>

                    <div className="info_right">
                        <div className="info_subscribe">
                            <input className="info_email" type='email' placeholder='name@email.com'></input>
                            <button className='info_btn' variant="contained">Join</button>
                        </div>
                        <div className="info_accept">
                            <input className="info_checkbox" type='checkbox'></input>
                            <div className="info_text">We take your privacy seriously and are committed to protecting your personal information. By subscribing to our mailing list, you are consenting to receive periodic emails from us about our products, promotions, and other tea-related information.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Info