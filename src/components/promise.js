import item1 from './../images/item1.png';
import item2 from './../images/item2.png';
import item3 from './../images/item3.png';
import item4 from './../images/item4.png';


function Promise() {
    return ( 
        <div className="promise">
            <div className="container">
                <div className="title_blog">We Prioritise</div>
                <div className="promise_inner">
                    <div className="promise_item">
                        <div className="promise_title">Single garden teas</div>
                        <div className="promise_subTitle">Complete transparency</div>
                        <img src={item1} alt=""></img>

                    </div>

                    <div className="promise_item">
                        <div className="promise_title">Only Loose leaf tea</div>
                        <div className="promise_subTitle">Best Drinking Experience</div>
                        <img src={item2} alt=""></img>

                    </div>

                    <div className="promise_item">
                        <div className="promise_title">Customer support</div>
                        <div className="promise_subTitle">No bots, no automated replies</div>
                        <img src={item3} alt=""></img>

                    </div>

                    <div className="promise_item">
                        <div className="promise_title">Fast shipping</div>
                        <div className="promise_subTitle">Save, Convenient, Reliable</div>
                        <img src={item4} alt=""></img>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Promise