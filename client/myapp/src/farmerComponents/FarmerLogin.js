import axios from 'axios' ;
import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import {Link} from 'react-router-dom' ;
import NavBarFarmer from './NavBarFarmer';
const Login = () => 
{
    const [farmerEmail,setFarmerEmail] = useState('') ;
    const [farmerPassword,setFarmerPassword] = useState('') ;

    var navigate = useNavigate() ;

    const handleLogin = async(e) => 
    {
        e.preventDefault() ;
        try 
        {
            var res = await axios.post("http://localhost:3500/v1/api/farmerProfiles/postFarmerLogin",
            {
                farmerEmail:farmerEmail ,
                farmerPassword:farmerPassword
            }
            ) 
            console.log(res) ;
            if (res.data.success)
            {
                message.send(" Login successfull ") ;
                navigate("/FarmerComplaintsLetter") ;
            }
        } 

        catch(error)
        {
            console.log(error) ;
            message.error(" Server side error occured ") ;
        }
    }

    return (
       <div className = "Login">
       <NavBarFarmer/> 
        <div className = "pageHeading">
                Enter your login details
        </div>
        <br/>
    <form onSubmit={handleLogin}>
        <div className="registerForm">
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
       <button type="submit" class="pageButton">Login</button>
       <div className="pageEnding">
       <Link to = "/Register" className = "pageLinking">
       <p>
       Not have an account - Register
       </p>
       </Link>
       </div>
     </div>
  </form>
       </div> 
    )
}

export default Login ;