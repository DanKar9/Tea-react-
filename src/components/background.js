import mainBackground from './../images/mainBackground.jpg'

function Background() {
    return (
        <section className="section_background">
        <div className="section__inner">
            <img className='img_background'src={mainBackground} alt=""></img>
            <div className="title">
                <div className="section_title">A cup of tea is a moment of calm in the chaos of life</div>
                <div className="section_supTitle">Wide selection of high-quality teas from all over the world, carefully curated by tea experts.</div>
            </div> 
        </div>
    </section>
    )

}

export default Background;