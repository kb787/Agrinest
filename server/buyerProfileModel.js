var mongoose = require('mongoose') ;

var buyerProfileSchema = mongoose.Schema(
    {
        companyName : {
            type:String ,
           // required:true 
        } ,

        companyEmailAddress : {
            type:String ,
          //   required:true 
        }  ,

        companyPassword : {
            type:String ,
          //  required:true 
        } ,

        companySize : {
            type:String ,
          //  required:true 
        }
    }
) 

if(mongoose.models['buyerprofiles']) {
    return mongoose.model('buyerprofiles') ;  
}

var buyerProfiles = mongoose.model('buyerProfiles',buyerProfileSchema) 
module.exports = buyerProfiles ;