var mongoose = require('mongoose') ;

var farmerProfileSchema = mongoose.Schema(
    {
        farmerName : 
        {
            type:String ,
          //  required:true ,
        } ,

        farmerEmailAddress : 
        {
            type:String ,
          //  required:true ,
        } ,

        farmerPassword :
        {
            type:String ,
          //  required:true ,
        } ,

        farmerAddress :
        {
            type:String ,
         //   required:true 
        } ,

        farmerMainProducts :
        {
            type:String ,
          //  required:true 
        }
    }
)

if(mongoose.models['farmerprofiles'])
{
    return mongoose.model('farmerprofiles') ;
}

var farmerProfiles = mongoose.model('farmerprofiles',farmerProfileSchema) ;
module.exports = farmerProfiles ;