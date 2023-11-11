var express = require('express') ;
var fs = require('fs') ;
var pdfFile = require('pdfkit') ;
var multer = require('multer') ;
var storage = multer.memoryStorage() ;
var upload = multer({storage}) ;


var buyerProducts = require('./buyerProductModel') ;
var buyerProfiles = require('./buyerProfileModel') ;
var buyerComplaints = require('./buyerComplaintModel') ;


var farmerRegisterModel = require("./registerModelFarmers") ; 
var farmerProducts = require('./farmerProductModel') ;
const farmerProfiles = require('./farmerProfileModel');
var farmerComplaints= require('./farmerComplaintModel');





const handleBuyerLogin = async(req,res) => 
{
    try 
    {
        const {companyEmailAddress,companyPassword} = req.body ;
        console.log(req.body) ;
        var prevUser = await buyerProfiles.findOne(
            {
              companyEmailAddress:req.body.companyEmailAddress
            }
        )
        if(!prevUser)
        {
            return res.status(200).send({message:"Invalid email address", success:false}) ; 
        }
        else if(prevUser.companyPassword !== req.body.companyPassword)
        {
            return res.status(200).send({message:"Invalid email address or password", success:false}) ;
        }
        else 
        {
            return res.status(201).send({message:"Login successfull",success:true}) ;
        }
    }
    catch(error)
    {
         console.log(error) ;
         return res.status(500).send({message:"Unable to login", success:false}) ;
    }
}


const handleFarmerRegister = async(req,res) => 
{ 
    {
        try 
        {
         const {farmerName, farmerEmail,farmerPassword } = req.body ;
            console.log(req.body) ;
            var existingUser = await farmerRegisterModel.findOne({farmerEmail : req.body.farmerEmail}) ;
            console.log(existingUser) ;
            if(existingUser)
            {
                return res.status(200).send({message: "User Already Exists" , success:false}) ;
            }
            else 
            { 
              
               const farmerName = req.body.farmerName ;
               const farmerPassword = req.body.farmerPassword ;
               var newUser = await new farmerRegisterModel({
                farmerName,farmerEmail,farmerPassword
                }) ;
               await newUser.save({farmerName,farmerEmail,farmerPassword}) ;
               return res.status(201).send({message:"Successfully saved the new user",success:true}) ;    
               
            }
        }
        catch(error)
        { 
            console.log(error) ;
            return res.status(500).send({message:"Server side error occured",success:false}) ;
        }
   }
}


const handleBuyerProduct = async(req,res) => {
    try {
        const {productQuantity,shippingLocation} = req.body ;
        console.log(req.body) ;

        var newProductOrder = await new buyerProducts(
            {
                productQuantity,shippingLocation
            }
        )
        newProductOrder.save() ;
        console.log(newProductOrder) ;
        return res.status(201).send({message:"Booking Successfull",success:true,newProductOrder}) ;
    }

    catch(error)
    {
        return res.status(500).send({message:"Unable to book the Item",success:false}) ;
    }
}

const handleBuyerAccount = async(req,res) => {
    try {
        const {companyName,companyEmailAddress,companyPassword,companySize} = req.body ;
        console.log(req.body) ;

        var newBuyerAccount = await new buyerProfiles(
            {
                companyName,companyEmailAddress,companyPassword,companySize
            }
        ) 
        newBuyerAccount.save() ;
        console.log(newBuyerAccount) ;
        return res.status(201).send({message:'Account created successfully',success:true,newBuyerAccount}) ;
    }
    catch(error)
    {
        return res.status(500).send({message:'Unable to create account',success:false}) ;
    }
}

const handleBuyerComplaint = async(req,res) => {

    try {
        const {applicantName, applicantStreet,applicantCity,applicantContact,applicantComplaint,farmerName,farmerAddress,productName} = req.body ;
        console.log(req.body) ;

        var myDoc = new pdfFile ;
        var inputs = req.body ;

        myDoc.pipe(fs.createWriteStream('output.pdf')) ;
        myDoc.text(`Applicant Name: ${inputs.applicantName}`) ;
        myDoc.text(`Street : ${inputs.applicantStreet} `) ;
        myDoc.text(`City:${inputs.applicantCity} `) ;
        myDoc.text(``) ;
        myDoc.text(``) ;
        myDoc.text(`To`) ;
        myDoc.text(`${inputs.farmerName}`) ;
        myDoc.text(`${inputs.farmerAddress}`) ;
        myDoc.text(``) ;
        myDoc.text(``) ;
        myDoc.text(`Subject : ${inputs.applicantComplaint}`) ;
        myDoc.text(``) ;
        myDoc.text(``) ;
        myDoc.text(`Dear Sir , I am writing this letter to inform you that I had a bad experienced of product`) ;
        myDoc.text(`delivered by you. The item ${inputs.productName} is unexpectedly rotten and I expect to replace or refund them as soon as possible`) ;
        myDoc.text(``) ;
        myDoc.text(``) ;
        myDoc.text(`Yours Faithfully`) ;
        myDoc.text(`${inputs.applicantName}`)
        var newComplaint = await new buyerComplaints(
            {
                applicantName,applicantStreet,applicantCity,applicantContact,applicantComplaint,farmerName,farmerAddress,productName
            }
        ) 
        newComplaint.save() ;
        console.log(newComplaint) ;
        myDoc.end() ;
        res.download('output.pdf')
        return res.status(200).send({message:'Successfully registered complaint',success:true,newComplaint}) ;
        
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:'Unable to register complaint',success:false}) ;
    }

}

const handleFarmerProduct = async(req,res) => {
    try {
        const {farmerProductName,farmerProductRate} = req.body ;
       // const farmerProductImage = req.file.buffer;
        console.log(req.body) ;  
      //  var imageBuffer = req.file.buffer ;
        
        var newFarmerProducts = await new farmerProducts(
            {
                farmerProductName,farmerProductRate
            }
        )
        newFarmerProducts.save() ;
        console.log(newFarmerProducts) ;
        return res.status(200).send({message:'Successfully saved new product',newFarmerProducts,success:true})
    }

    catch(error)
    {
        return res.status(500).send({message:'Unable to save the product'}) ;
    }
}

const handleFarmerProfile = async(req,res) => {
    try {
        const {farmerName,farmerEmailAddress,farmerPassword,farmerAddress,farmerMainProducts} = req.body ;
        console.log(req.body) ;

        var newFarmerAccount = await new farmerProfiles(
            {
                farmerName,farmerEmailAddress,farmerPassword,farmerAddress,farmerMainProducts
            }
        ) 
        newFarmerAccount.save() ;
        console.log(newFarmerAccount) ;
        return res.status(201).send({message:'Farmer Account created successfully',success:true,newFarmerAccount}) ;
    }
    catch(error)
    {
        return res.status(500).send({message:'Unable to create account',success:false}) ;
    }
}

const handleFarmerLogin = async(req,res) => 
{
    try 
    {
        const {farmerEmailAddress,farmerPassword} = req.body ;
        console.log(req.body) ;
        var prevUser = await farmerProfiles.findOne(
            {
              farmerEmailAddress:req.body.farmerEmailAddress
            }
        )
        if(!prevUser)
        {
            return res.status(200).send({message:"Invalid email address", success:false}) ; 
        }
        else if(prevUser.farmerPassword !== req.body.farmerPassword)
        {
            return res.status(200).send({message:"Invalid email address or password", success:false}) ;
        }
        else 
        {
            return res.status(201).send({message:"Login successfull",success:true}) ;
        }
    }
    catch(error)
    {
         console.log(error) ;
         return res.status(500).send({message:"Unable to login", success:false}) ;
    }
}

const handleFarmerComplaint = async(req,res) => {

    try {
        const {applicantName1, applicantStreet1,applicantCity1,applicantContact1,applicantComplaint1,buyerName,buyerAddress,productName1} = req.body ;
        console.log(req.body) ;

        var myDoc = new pdfFile ;
        var inputs = req.body ;

        myDoc.pipe(fs.createWriteStream('output1.pdf')) ;
        myDoc.text(`Applicant Name: ${inputs.applicantName1}`) ;
        myDoc.text(`Street : ${inputs.applicantStreet1} `) ;
        myDoc.text(`City:${inputs.applicantCity1} `) ;
        myDoc.text(``) ;
        myDoc.text(``) ;
        myDoc.text(`To`) ;
        myDoc.text(`The DSP police Inspector`) ;
        myDoc.text(`Shanti Nagar Police Station`) ;
        myDoc.text(``) ;
        myDoc.text(``) ;
        myDoc.text(`Subject : ${inputs.applicantComplaint1}`) ;
        myDoc.text(``) ;
        myDoc.text(``) ;
        myDoc.text(`Dear Sir , I am writing to bring to your attention a pressing issue that concerns the exploitation of local farmers by buyer ${inputs.buyerName} staying at ${inputs.buyerAddress}  .`) ;
        myDoc.text(`Farmers being subjected to exploitation by certain buyers who purchase agricultural products at prices significantly below the fair market rates.`) ;
        myDoc.text(`These practices have had a severe impact on the livelihoods of our hardworking farmers and have created a climate of economic distress within our agricultural community.`) ;
        myDoc.text(`Product Name :${inputs.productName1}`) ;
        myDoc.text(``) ;
        myDoc.text(``) ;
        myDoc.text(`Yours Faithfully`) ;
        myDoc.text(`${inputs.applicantName1}`)
        var newComplaint1 = await new farmerComplaints(
            {
                applicantName1,applicantStreet1,applicantCity1,applicantContact1,applicantComplaint1,buyerName,buyerAddress,productName1
            }
        ) 
        newComplaint1.save() ;
        console.log(newComplaint1) ;
        myDoc.end() ;
        res.download('output.pdf')
        return res.status(200).send({message:'Successfully registered complaint',success:true,newComplaint1}) ;
        
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:'Unable to register complaint',success:false}) ;
    }

}

var farmerLoginRouter = express.Router() ;
var farmerProfileRouter = express.Router() ;
var farmerProductRouter = express.Router() ;
var farmerComplaintRouter= express.Router();

var buyerProfileRouter = express.Router() ;
var buyerProductRouter = express.Router() ;
var buyerLoginRouter = express.Router() ;
var buyerComplaintRouter = express.Router() ;



farmerLoginRouter.post('/postFarmerLogin',handleFarmerLogin) ;
farmerProfileRouter.post('/postFarmerProfile',handleFarmerProfile) ;
farmerProductRouter.post('/postFarmerProduct',  handleFarmerProduct);
farmerComplaintRouter.post('/postFarmerComplaintsLetter',handleFarmerComplaint)

buyerProfileRouter.post('/postBuyerProfile',handleBuyerAccount) ;
buyerProductRouter.post('/postProductOrder',handleBuyerProduct) ;
buyerLoginRouter.post('/postBuyerLogin',handleBuyerLogin) ;
buyerComplaintRouter.post('/postBuyerComplaint',handleBuyerComplaint) ;


module.exports = {farmerLoginRouter,farmerProfileRouter,farmerProductRouter,farmerComplaintRouter,buyerProfileRouter,buyerProductRouter,buyerLoginRouter,buyerComplaintRouter} ;