import {useState} from 'react' ;
import {message} from 'antd' ;
import regPage from 'D:/mernStackAgroApp/client/myapp/src/images/regPage.jpg' ;
import {useNavigate} from 'react-router-dom' ;
import axios from 'axios' ;
import NavBarFarmer from './NavBarFarmer';

const RegisterFarmer = () => 
{
    {/*inputs to be taken */ }
    const [farmerName,setFarmerName] = useState('') ;
    const [farmerEmailAddress,setFarmerEmailAddress] = useState('') ;
    const [farmerPassword,setFarmerPassword] = useState('') ;
    const [farmerAddress,setFarmerAddress] = useState('') ;
    const [farmerMainProducts,setFarmerMainProducts] = useState('') ;
    
    var navg = useNavigate() ;
    
    const handleFarmerRegistration = async(e) => {
         e.preventDefault() ;

         try {
            var res = await axios.post("http://localhost:3500/v2/api/farmerProfiles/postFarmerProfile", {
                farmerName:farmerName,
                farmerEmailAddress:farmerEmailAddress,
                farmerPassword:farmerPassword ,
                farmerAddress:farmerAddress ,
                farmerMainProducts:farmerMainProducts ,

            })
            if(res.data.success)
            {
                message.success('Profile Created successfully');
                navg("/FarmerComplaintsLetter") ;
            }
         }
         catch(error)
         {
            console.log(error) ;
            message.error(" Server side error occured ") ;
         }
    }


    return (
        <div className = "RegisterFarmer">
        <NavBarFarmer/>  
             <h1 className = "finalRegHeading">Create your account in simple steps</h1>
             <img src = {regPage} className='buyerPageImages' />
             <br/> 
             <br/>
             <form>
            <div className="finalPageForm">
                <input
                  type="text"
                  className="finalPageFormLabel"
                  placeholder="Enter your name"
                  value = {farmerName}
                  onChange={(e) => setFarmerName(e.target.value)}
                  />
            </div>
            <br />
            <div className="finalPageForm">
                <input
                  type="email"
                  className="finalPageFormLabel"
                  placeholder="Enter your email address"
                  value = {farmerEmailAddress}
                  onChange={(e) => setFarmerEmailAddress(e.target.value)}
                />
            </div>
            <br />
            <div className="finalPageForm">
                <input
                  type="password"
                  className="finalPageFormLabel"
                  placeholder="Enter your password"
                  value = {farmerPassword}
                  onChange={(e) => setFarmerPassword(e.target.value)}
                />
            </div>
            <br />
            <div className="finalPageForm">
                <input
                  type="text"
                  className="finalPageFormLabel"
                  placeholder="Enter your address"
                  value = {farmerAddress}
                  onChange={(e) => setFarmerAddress(e.target.value)}
                />
            </div>
            <br />
            <div className="finalPageForm">
                <input
                  type="text"
                  className="finalPageFormLabel"
                  placeholder="Enter your main products"
                  value = {farmerMainProducts}
                  onChange={(e) => setFarmerMainProducts(e.target.value)}
                />
            </div>
            </form>
            <br />
            <br/>
            <button type="button" className="finalPageButton" onClick={handleFarmerRegistration}>
             Create 
            </button>
        </div>
    )
}

export default RegisterFarmer ;