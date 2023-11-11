import {useState} from 'react' ;
import {message} from 'antd' ;
import distributers from 'D:/mernStackAgroApp/client/myapp/src/images/distributers.jpg' ;
import {useNavigate} from 'react-router-dom' ;
import axios from 'axios' ;
import NavBarBuyer from './NavBarBuyer';

const BuyerRegister = () => 
{
    const [companyName,setCompanyName] = useState('') ;
    const [companyEmailAddress,setCompanyEmailAddress] = useState('') ;
    const [companyPassword,setCompanyPassword] = useState('') ;
    const [companySize,setCompanySize] = useState('') ; 

    var navg = useNavigate() ;
    
    const handleBuyerRegistration = async(e) => {
         e.preventDefault() ;

         try {
            var res = await axios.post("http://localhost:3500/v5/api/buyerProfiles/postBuyerProfile", {
                companyName:companyName ,
                companyEmailAddress:companyEmailAddress ,
                companyPassword:companyPassword , 
                companySize:companySize 
            })
            if(res.data.success)
            {
                message.success('Registration successfull');
                navg("/Complaint") ;
            }
         }
         catch(error)
         {
            console.log(error) ;
            message.error(" Server side error occured ") ;
         }
    }


    return (
        <div className = "BuyerRegister">
        <NavBarBuyer/>    
             <h1 className = "finalHeading">Create your account in simple steps</h1>
             <img src = {distributers} className='buyerPageImages' />
             <br/> 
             <br/>
             <form>
            <div className="finalPageForm">
                <input
                  type="text"
                  className="finalPageFormLabel"
                  placeholder="Enter your company name"
                  value = {companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  />
            </div>
            <br />
            <div className="finalPageForm">
                <input
                  type="email"
                  className="finalPageFormLabel"
                  placeholder="Enter your email address"
                  value = {companyEmailAddress}
                  onChange={(e) => setCompanyEmailAddress(e.target.value)}
                />
            </div>
            <br />
            <div className="finalPageForm">
                <input
                  type="password"
                  className="finalPageFormLabel"
                  placeholder="Enter your password"
                  value = {companyPassword}
                  onChange={(e) => setCompanyPassword(e.target.value)}
                />
            </div>
            <br />
            <div className="finalPageForm">
                <input
                  type="text"
                  className="finalPageFormLabel"
                  placeholder="Enter your company size"
                  value = {companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                />
            </div>
            </form>
            <br />
            <br/>
            <button type="button" className="finalPageButton" onClick={handleBuyerRegistration}>
             Create 
            </button>
        </div>
    )
}

export default BuyerRegister ;