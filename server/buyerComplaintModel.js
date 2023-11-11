var mongoose = require('mongoose') ;

var buyerComplaintSchema = mongoose.Schema(
    {
        applicantName : {
            type:String ,
           // required:true ,
        } ,

        applicantStreet : {
            type:String ,
          //  required:true ,
        } ,

        applicantCity : {
            type:String ,
          //  required:true ,
        } ,

        applicantContact : {
            type:String ,
          //  required:true ,
        } ,

        applicantComplaint : {
            type:String ,
          //  required:true ,
        } ,

        farmerName : {
            type:String ,
          //  required:true ,
        } ,

        farmerAddress : {
            type:String ,
          //  required:true ,
        } ,

        productName : {
            type:String ,
          //  required:true ,
        }


    }
)

if(mongoose.models['buyercomplaints']){
    return mongoose.model('buyercomplaints')
} 

var buyerComplaints = mongoose.model('buyercomplaints',buyerComplaintSchema) ;

module.exports = buyerComplaints ;