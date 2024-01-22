import logo from './../images/teaLogo.svg'
import basketIcon from './../images/basket_icon.svg'
import profileIcon from './../images/profile_icon.svg'
import searchIcon from './../images/search_icon.svg'

function Header() {
    return (
        <header className="header">
        <div className="container">
            <div className="header__inner">
                <div className="nav_img">
                    <img src={logo} alt=""></img>
                    
                </div>
                
                <div className="nav">
                    <div className="nav_link">Black</div>
                    <div className="nav_link">Green</div>
                    <div className="nav_link">White</div>
                    <div className="nav_link">Oolong</div>
                    <div className="nav_link">Pu-erh</div>
                </div>
                
                <div className="nav_icon">
                    <img src={basketIcon} alt=""></img>
                    <img src={profileIcon} alt=""></img>
                </div>
                
                <div className="nav_search">
                    <img src={searchIcon} alt=""></img>
                </div>

            </div>
        </div>
    </header>
    
    );
  }
  
  export default Header;