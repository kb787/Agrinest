import {Link} from 'react-router-dom' ;

const NavBarBuyer = () => {
   return (
    <header className = "homepageHeader">
    <ul className = "navItems">
        <li className = "itemList">
        <Link to = "/Homepage" className = "linking">   
         Home 
         </Link>
        </li>
        <li className = "itemList">
        <Link to = "/Products" className = "linking">   
         Explore Products
         </Link>
        </li>
      {/*  
        <li className = "itemList">
        <Link to = "/Login" className = "linking">   
         Add Products  
         </Link> 
        </li>
       */}
        <li className = "itemList">
        <Link to = "/BuyerRegister" className = "linking">   
         Product Complaints 
         </Link>
        </li>
        <li className = "itemList">
        <Link to = "/" className = "linking">   
         Farmer Mode 
         </Link>
        </li>
    </ul>
 </header>
   )
}

export default NavBarBuyer ;