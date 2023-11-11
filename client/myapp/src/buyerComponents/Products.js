import onion from 'D:/mernStackAgroApp/client/myapp/src/images/onion.jpg';
import potato from 'D:/mernStackAgroApp/client/myapp/src/images/potato.jpg';
import ladyfinger from 'D:/mernStackAgroApp/client/myapp/src/images/ladyfinger.jpg';
import cauliflower from 'D:/mernStackAgroApp/client/myapp/src/images/cauliflower.jpg';
import tomatoes from 'D:/mernStackAgroApp/client/myapp/src/images/tomatoes.jpg';
import brinjal from 'D:/mernStackAgroApp/client/myapp/src/images/brinjal.jpg';
import cucumber from 'D:/mernStackAgroApp/client/myapp/src/images/cucumber.jpg';
import cabbage from 'D:/mernStackAgroApp/client/myapp/src/images/cabbage.jpg';
import carrot from 'D:/mernStackAgroApp/client/myapp/src/images/carrot.jpg';
import chillies from 'D:/mernStackAgroApp/client/myapp/src/images/chillies.jpg';
import corn from 'D:/mernStackAgroApp/client/myapp/src/images/corn.jpg';
import Peas from 'D:/mernStackAgroApp/client/myapp/src/images/Peas.jpg';
import NavBarBuyer from './NavBarBuyer';
import {Link} from 'react-router-dom' ;
const Products = () => {
    return (
        <div className="Products">
        <NavBarBuyer/>    
            <h1 className="titlep">Explore Products</h1>
            <div className="cardgrid">
                <div class="card">
                    <img id="onion" src={onion} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Onion</h3>
                        <h4>RS 45 PER 1KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={potato} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Potato</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={ladyfinger} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Ladyfinger</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>

                        </div>
                </div>
                <div class="card">
                    <img id="onion" src={cauliflower} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Cauliflower</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
            </div>
            <div className="cardgrid">
                <div class="card">
                    <img id="onion" src={tomatoes} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Tomatoes</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={brinjal} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Brinjal</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={cucumber} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Cucumber</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={cabbage} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Cabbage</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
            </div>
            <div className="cardgrid">
                <div class="card">
                    <img id="onion" src={carrot} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Carrot</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={chillies} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Green Chillie</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={corn} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Corn</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={Peas} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Peas</h3>
                        <h4>RS 45 PER KG</h4>
                        <button id="cartbutton">
                           <Link to = "/ProductFinal" className = "finalLinking">  
                              Book
                            </Link> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;