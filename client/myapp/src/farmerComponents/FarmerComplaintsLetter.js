import {useState} from 'react' ;
import { useNavigate } from 'react-router-dom';
import axios from 'axios' ;
import {message} from 'antd' ;
import NavBarFarmer from './NavBarFarmer';

const FarmerComplaintsLetter = () => 
{
   const [applicantName1, setApplicantName1] = useState('') ;
   const [applicantStreet1, setApplicantStreet1] = useState('') ;
   const [applicantCity1, setApplicantCity1] = useState('') ;
   const [applicantContact1,setApplicantContact1] = useState('')
   const [applicantComplaint1,setApplicantComplaint1] = useState('') ;
   const [buyerName, setBuyerName] = useState('')  ;
   const [buyerAddress,setBuyerAddress] = useState('') ;
   const [productName1,setProductName1] = useState('') ;

   var navg = useNavigate()

   const handleBuyerComplaint = async(e) => {
      e.preventDefault() ;

    try {  
        var res = await axios.post("http://localhost:3500/v4/api/farmerComplaints/postFarmerComplaintsLetter", {
           applicantName1,applicantStreet1,applicantCity1,applicantContact1,applicantComplaint1,buyerName,buyerAddress,productName1
      })
      if(res.data.success)
      {
          message.success("Successfully registered your complaint ") ;
          navg("/Homepage") ;
      }
   }
   catch(error) 
   {
      console.log(error) ;
      message.error(" Server side error occured ") ;
   }

}

    return (
        <div className = "Complaint">
        <NavBarFarmer/>        
            <h1 className = "complaintHeading">Product Complaint</h1>
           <form>
            <p className = "complaintPara">
            <input type = 'text' value = {applicantName1} className = 'complaintLabel' placeholder = 'Applicant name'  onChange = {(e) => setApplicantName1(e.target.value)}/>
            <br/>
            <input type = 'text' value = {applicantStreet1} className = 'complaintLabel' placeholder = 'Street name'  onChange = {(e) => setApplicantStreet1(e.target.value)}/>
            <br/>
            <input type = 'text' value = {applicantCity1} className = 'complaintLabel' placeholder = 'City name'  onChange = {(e) => setApplicantCity1(e.target.value)}/>
            <br/>
            <br/>
            To
            <br/>
            <input type = 'text' value = {buyerName} className = 'complaintLabel' placeholder = 'buyer Name'  onChange = {(e) => setBuyerName(e.target.value)}/> 
            <br/>
            <input type = 'text' value = {buyerAddress} className = 'complaintLabel' placeholder = 'buyer address'  onChange = {(e) => setBuyerAddress(e.target.value)}/>
            <br/>
            <br/>
            Subject :- <input type = 'text' value = {applicantComplaint1} className = 'complaintLabel' placeholder = 'Complaint here'  onChange = {(e) => setApplicantComplaint1(e.target.value)}/>
            <br/>
            <br/>
            Dear Sir , I am writing to bring to your attention a pressing issue that concerns the exploitation of local farmers by buyer <input type = 'text' value = {buyerName} className = 'complaintLabel' placeholder = 'Buyer name'  onChange = {(e) => setBuyerName(e.target.value)}/> staying at <input type = 'text' value = {buyerAddress} className = 'complaintLabel' placeholder = 'Buyer Address'  onChange = {(e) => setBuyerAddress(e.target.value)}/>    .
            Farmers being subjected to exploitation by certain buyers who purchase agricultural products at prices significantly below the fair market rates.
            These practices have had a severe impact on the livelihoods of our hardworking farmers and have created a climate of economic distress within our agricultural community.
            The item <br/> <input type = 'text' value = {productName1} className = 'complaintLabel' placeholder = 'Product name'  onChange = {(e) => setProductName1(e.target.value)}/> is unexpectedly rotten and I expect to replace or refund them as soon as possible
            <br/>
            <br/>
            For more details contact me on :- <input type = 'text' value = {applicantContact1} className = 'complaintLabel' placeholder = 'Contact No'  onChange = {(e) => setApplicantContact1(e.target.value)}/>
            <br/>
            <br/>
            <br/>
            Your's faithfully 
            <br/>
            {applicantName1}
            <br/>
            </p>
            <br/>
            <br/>
            <button type="button" className="finalPageButton" onClick = {handleBuyerComplaint}> 
             Submit 
            </button>    
            </form>   
        </div> 
    )
}

export default FarmerComplaintsLetter ;