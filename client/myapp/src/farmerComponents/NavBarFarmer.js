import {Link} from 'react-router-dom' ;

const NavBarFarmer = () => {
    return (
        <header className = "homepageHeader">
        <ul className = "navItems">
            <li className = "itemList">
            <Link to = "/" className = "linking">   
             Home 
             </Link>
            </li>
            <li className = "itemList">
            <Link to = "/Buyers" className = "linking">   
             Contact Buyers
             </Link>
            </li>
            <li className = "itemList">
            <Link to = "/NewProduct" className = "linking">   
             Add Products  
             </Link> 
            </li>
            <li className = "itemList">
            <Link to = "/RegisterFarmer" className = "linking">   
            Complaints 
             </Link>
            </li>
            <li className = "itemList">
            <Link to = "/Homepage" className = "linking">   
             Buyer Mode 
             </Link>
            </li>
        </ul>
     </header>
    )
}

export default NavBarFarmer ;