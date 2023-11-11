import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom'
import finalPageImages from 'D:/mernStackAgroApp/client/myapp/src/images/finalPageImages.jpg' ;
import finalPageImages2 from 'D:/mernStackAgroApp/client/myapp/src/images/finalPageImages2.jpg' ;
import axios from 'axios' ;
import {message} from 'antd' ;
import NavBarBuyer from './NavBarBuyer';


const ProductFinal = () => {
    const [productQuantity,setProductQuantity] = useState('') ;
    const [shippingLocation,setShippingLocation] = useState('') ;

    var navg = useNavigate() ;
    
    const handleConfirm = async(e) => {
         e.preventDefault() ;

         try {
            var res = await axios.post("http://localhost:3500/v6/api/buyersProduct/postProductOrder", {
                productQuantity:productQuantity,
                shippingLocation:shippingLocation
            })
            console.log(res) ;
            if(res.data.success)
            {
                message.success(`Product will be delivered in 2 days , Amount payable is, ${45*productQuantity}`);
                navg("/Homepage") ;
            }
         }
         catch(error)
         {
            message.error(" Server side error occured ") ;
         }
    }

    return (
        <div className = "ProductFinal">
        <NavBarBuyer/>    
            <h1 className = "finalHeading">Confirm your booking in simple steps</h1>
            <img src = {finalPageImages} className='finalPageImages' />
            <br/>
            <br/>
            <img src = {finalPageImages2} className='finalPageImages' />
            <br/>
            <br/>
            <form>
            <div className="finalPageForm">
                <input
                  type="text"
                  className="finalPageFormLabel"
                  placeholder="Enter product quantity"
                  value = {productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                  />
            </div>
            <br />
            <div className="finalPageForm">
                <input
                  type="text"
                  className="finalPageFormLabel"
                  placeholder="Enter shipping address"
                  value = {shippingLocation}
                  onChange={(e) => setShippingLocation(e.target.value)}
                />
            </div>
            </form>
            <br />
            <br/>
            <button type="button" className="finalPageButton" onClick = {handleConfirm}>
             Confirm
            </button>
        </div> 

    )
}

export default ProductFinal