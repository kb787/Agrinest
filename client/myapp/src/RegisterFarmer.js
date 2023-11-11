import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import axios from 'axios' ;
import {message} from 'antd' ;
import {Link} from 'react-router-dom' ;
const RegisterFarmer = () => 
{
    const [farmerName, setFarmerName] = useState('') ;
    const [farmerEmail, setFarmerEmail] = useState('') ;
    const [farmerPassword,setFarmerPassword] = useState('') ;

    var navigate = useNavigate() ;

    const handleRegister = async(e) => 
    {
        e.preventDefault() ;
        try 
        {
            var postResponse = await axios.post("http://localhost:3500/v1/api/farmers/postFarmerRegister",
            {
                farmerName:farmerName ,
                farmerEmail:farmerEmail ,
                farmerPassword:farmerPassword
            }
            ) 
            console.log(postResponse) ;
            if(postResponse.data && postResponse.data.success)
            {
                message.success(" Registration successfull ") ;
                navigate("/FarmerComplaint") ;
            }
        } 

        catch(error)
        {
            console.log(error) ;
            message.error(" Server side error occured ") ;
        }
    }

    return (
        <div className = "Register">
        <div className = "pageHeading">
                Enter your registration details
        </div>
        <br/>
    <form onSubmit={handleRegister}>
        <div className="registerForm">
        <input
        type="text"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter your name"
        required="true"
        value={farmerName}
        onChange={(e) => setFarmerName(e.target.value)}
       />
       <br/>
       <br/>
       <input
        type="email"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter your email address"
        required="true"
        value={farmerEmail}
        onChange={(e) => setFarmerEmail(e.target.value)}
       />
       <br/>
       <br/>
       <input
        type="password"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter password"
        required="true"
        value={farmerPassword}
        onChange={(e) => setFarmerPassword(e.target.value)}
       />
       <br/>
       <br/>
       <button type="submit" class="pageButton">Register</button>
       <div className="pageEnding">
       <Link to = "/Login" className = "pageLinking">
       <p>
       Already have an account - Login
       </p>
       </Link>
       </div>
     </div>
  </form>
        </div>
    )
}

export default RegisterFarmer ;