import {message} from 'antd' ;
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios' ;

const BuyerLogin = () => 
{
    const [companyEmailAddress,setCompanyEmailAddress] = useState('') ;
    const [companyPassword,setCompanyPassword] = useState('') ;
    
    var navg = useNavigate() ;
    
    const handleBuyerLogin = async(e) => {
         e.preventDefault() ;

         try {
            var res = await axios.post("http://localhost:3500/v7/api/buyerProfiles/postBuyerLogin", {
                companyEmailAddress:companyEmailAddress ,
                companyPassword:companyPassword , 
            })
            if(res.data.success)
            {
                message.success('Login successfull');
                navg("/Complaint") ;
            }
            else 
            {
               message.error(' Invalid email or password ') ;
            }
         }
         catch(error)
         {
            message.error(" Server side error occured ") ;
         }
    }
    return (
        <div className = "BuyerLogin">
            <h1 className = "buyerLoginHeading">Verify your credentials</h1> 
            <br/>
            <br/>
            <form>
            <div className="finalPageForm">
                <input
                  type="email"
                  className="finalPageFormLabel"
                  placeholder="Enter your email address"
                  value = {companyEmailAddress}
                  onChange={(e) => setCompanyEmailAddress(e.target.value)}
                  />
            </div> 
            <br/>
            <div className="finalPageForm">
                <input
                  type="password"
                  className="finalPageFormLabel"
                  placeholder="Enter your password"
                  value = {companyPassword}
                  onChange={(e) => setCompanyPassword(e.target.value)}
                  />
            </div>
          </form>
          <br/>
          <br/> 
        <button type="button" className="finalPageButton" onClick={handleBuyerLogin}>
          Login         
        </button>
        </div>
    ) 
}

export default BuyerLogin ;