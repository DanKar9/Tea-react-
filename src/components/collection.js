import tea_black from './../images/tea_black.png'
import tea_green from './../images/tea_green.png'
import tea_white from './../images/tea_white.png'
import tea_oolong from './../images/tea_oolong.png'
import tea_Puerh from './../images/tea_Puerh.png'



function Collection() {
    return (
        <section className="collection">
            <div className="container">
                <div className="collection_quote">"Tea is not just a drink, it's a way of life and a way to connect with our loved ones."</div>
                <div className="title_part">Explore our Collections</div>
                <div className="collection_tea">
                    <div>
                        <img src={tea_black} alt=''></img>
                    
                    </div>

                    <div>
                        <img src={tea_green} alt=''></img>
                    
                    </div>

                    <div>
                        <img src={tea_white} alt=''></img>
                    
                    </div>

                    <div>
                        <img src={tea_oolong} alt=''></img>
                        
                    </div>

                    <div>
                        <img src={tea_Puerh} alt=''></img>
                        
                    </div>
                </div>
                
            </div>
        </section>
    )
}


export default Collection