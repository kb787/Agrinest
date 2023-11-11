import {useState} from 'react' ;
import { useNavigate } from 'react-router-dom';
import axios from 'axios' ;
import {message} from 'antd' ;

const Complaint = () => 
{
   const [applicantName, setApplicantName] = useState('') ;
   const [applicantStreet, setApplicantStreet] = useState('') ;
   const [applicantCity, setApplicantCity] = useState('') ;
   const [applicantContact,setApplicantContact] = useState('')
   const [applicantComplaint,setApplicantComplaint] = useState('') ;
   const [farmerName, setFarmerName] = useState('')  ;
   const [farmerAddress,setFarmerAddress] = useState('') ;
   const [productName,setProductName] = useState('') ;

   var navg = useNavigate()

   const handleBuyerComplaint = async(e) => {
      e.preventDefault() ;

    try {  
        var res = await axios.post("http://localhost:3500/v8/api/buyerComplaints/postBuyerComplaint", {
           applicantName,applicantStreet,applicantCity,applicantContact,applicantComplaint,farmerName,farmerAddress,productName
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
            <h1 className = "complaintHeading">Product Complaint</h1>
           <form>
            <p className = "complaintPara">
            <input type = 'text' value = {applicantName} className = 'complaintLabel' placeholder = 'Applicant name'  onChange = {(e) => setApplicantName(e.target.value)}/>
            <br/>
            <input type = 'text' value = {applicantStreet} className = 'complaintLabel' placeholder = 'Street name'  onChange = {(e) => setApplicantStreet(e.target.value)}/>
            <br/>
            <input type = 'text' value = {applicantCity} className = 'complaintLabel' placeholder = 'City name'  onChange = {(e) => setApplicantCity(e.target.value)}/>
            <br/>
            <br/>
            To
            <br/>
            <input type = 'text' value = {farmerName} className = 'complaintLabel' placeholder = 'Farmer Name'  onChange = {(e) => setFarmerName(e.target.value)}/> 
            <br/>
            <input type = 'text' value = {farmerAddress} className = 'complaintLabel' placeholder = 'Farmer address'  onChange = {(e) => setFarmerAddress(e.target.value)}/>
            <br/>
            <br/>
            Subject :- <input type = 'text' value = {applicantComplaint} className = 'complaintLabel' placeholder = 'Complaint here'  onChange = {(e) => setApplicantComplaint(e.target.value)}/>
            <br/>
            <br/>
            Dear Sir ,
            I am writing this letter to inform you that I had a bad experienced of product delivered by you
            The item <br/> <input type = 'text' value = {productName} className = 'complaintLabel' placeholder = 'Product name'  onChange = {(e) => setProductName(e.target.value)}/> is unexpectedly rotten and I expect to replace or refund them as soon as possible
            <br/>
            <br/>
            For more details contact me on :- <input type = 'text' value = {applicantContact} className = 'complaintLabel' placeholder = 'Contact No'  onChange = {(e) => setApplicantContact(e.target.value)}/>
            <br/>
            <br/>
            <br/>
            Your's faithfully 
            <br/>
            {applicantName}
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

export default Complaint ;