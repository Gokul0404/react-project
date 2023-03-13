import { Link } from "react-router-dom";
import React from 'react'
import Logo from "./img/imgpsh_fullsize_anim.png"

import './nav2.css';

function navbarb() {
  return (
    <div>
      <nav class="mobile-menu">
        <div  className="box">
        <img src={Logo} alt="img"/>
<label for="show-menu" class="show-menu"><span>Menu</span><div class="lines"></div></label>
	<input type="checkbox" id="show-menu"/>
		<ul id="menu" className="fw-bold " >
   
		<li> <Link style={{textDecoration: 'none'}} to="/"><a className=" text-dark fontn">Home</a></Link></li>
		<Link style={{textDecoration: 'none'}} to="/about"><li><a className="text-dark">About</a>	</li></Link>	

		<Link style={{textDecoration: 'none'}} to="/product"><li>			<a className="text-dark">Product</a>		</li></Link>
        <Link style={{textDecoration: 'none'}} to="/contact"><li> <a className="text-dark">News</a></li></Link>
       <Link style={{textDecoration: 'none'}} to="/card"><li><a className="text-dark">Contact</a></li></Link>
	</ul>
    </div>
</nav>

    </div>
  )
}

export default navbarb



