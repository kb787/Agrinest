var mongoose = require('mongoose') ;

var farmerComplaintSchema = mongoose.Schema(
    {
        applicantName1 : {
            type:String ,
          //  required:true ,
        } ,

        applicantStreet1 : {
            type:String ,
          //  required:true ,
        } ,

        applicantCity1 : {
            type:String ,
          //  required:true ,
        } ,

        applicantContact1 : {
            type:String ,
          //  required:true ,
        } ,

        applicantComplaint1 : {
            type:String ,
          //  required:true ,
        } ,

        buyerName : {
            type:String ,
          //  required:true ,
        } ,

        buyerAddress : {
            type:String ,
          //  required:true ,
        } ,

        productName1 : {
            type:String ,
         //   required:true ,
        }
    }
)
if(mongoose.models['farmercomplaints']){
    return mongoose.model('farmercomplaints')
} 

var farmerComplaints = mongoose.model('farmercomplaints',farmerComplaintSchema) ;

module.exports = farmerComplaints ;