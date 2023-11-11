import axios from 'axios' ;
import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import agriProd from 'D:/mernStackAgroApp/client/myapp/src/images/agriProd.jpg';
import NavBarFarmer from './NavBarFarmer';

const NewProduct = () => 
{
    const [farmerProductName,setFarmerProductName] = useState('') ;
   // const [farmerProductImage,setFarmerProductImage] = useState('') ;
    const [farmerProductRate,setFarmerProductRate] = useState('') ;

    var navigate = useNavigate() ;

    const handleNewestProduct = async(e) => {
        e.preventDefault() ;
  
      try {  
          var res = await axios.post("http://localhost:3500/v3/api/farmerProducts/postFarmerProduct", {
             farmerProductName,farmerProductRate
        })
        if(res.data.success)
        {
            message.success("Successfully added the product ") ;
            navigate("/") ;
        }
     }
     catch(error) 
     {
        console.log(error) ;
        message.error(" Server side error occured ") ;
     }
  
  }
  
    const handleNewProduct = async(e) => 
    {
        e.preventDefault() ;
        try 
        {
            var res = await axios.post("http://localhost:3500/v3/api/farmerProducts/postFarmerProduct",
            {
                farmerProductName:farmerProductName ,
                farmerProductRate:farmerProductRate ,
            }
            ) 
            console.log(res) ;
            if(res.data.success)
            {
                message.send(" Successfully added your product ") ;
                navigate("/") ;
            }
        } 

        catch(error)
        {
            console.log(error) ;
            message.error(" Server side error occured ") ;
        }
    }

    return (
       <div className = "NewProduct">
       <NavBarFarmer/> 
        <div className = "productHeading">
                Enter your product details
        </div>
        <br/>
        <img src = {agriProd} className='buyerPageImages' />
        <br/> 
        <br/>
        <br/> 

    <form>
        <div className="registerForm">
       <input
        type="text"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter your product name"
        required="true"
        value={farmerProductName}
        onChange={(e) => setFarmerProductName(e.target.value)}
       />
       <br/>
       <br/>
       <input
        type="number"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter your product rate per kg"
        required="true"
        value={farmerProductRate}
        onChange={(e) => setFarmerProductRate(e.target.value)}
       />
       <br/>
       <br/>
      {/* 
       <p className = "midPara">Enter product image</p>
       <input
        type="file"
        id="exampleInputEmail1"
        className="registerInputImage"
        placeholder="Enter image of product"
        required="true"
        value={farmerProductImage}
        onChange={(e) => setFarmerProductImage(e.target.value)}
       />
    */}  
       <br/>
       <br/>
       <button type="button" class="pageButton" onClick={handleNewestProduct}>Add product</button>
     </div>
  </form>
       </div> 
    )
}

export default NewProduct ;