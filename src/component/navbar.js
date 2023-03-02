import { Link } from "react-router-dom";


import Logo from "./img/imgpsh_fullsize_anim.png"

function navbar() {
  return (
    <>
      
    
      <div class="nav">
     
              <ul>
              <img src={Logo} alt="img"/>
          <Link style={{textDecoration: 'none'}} to="/">
            <li className="tr">Home</li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/about">
            <li className="tr">About</li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/product">
            <li className="tr">Product</li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/contact">
            <li className="tr">Contact</li>
          </Link>

          <button>Sign In</button>
        </ul>



       
        </div>
 
      
     
    </>
  );
}

export default navbar;
