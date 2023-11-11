var mongoose = require('mongoose') ;

var farmerRegisterSchema = mongoose.Schema(
    {
        farmerName :
        {
            type:String ,
            required:true ,
        } ,

        farmerEmail :
        {
            type:String ,
            required:true ,
        } , 

        farmerPassword :
        {
            type:String ,
            required:true 
        }
    }
)

if(mongoose.models['farmers'])
{
    return mongoose.model('farmers') ;
}

var farmerRegisterModel = mongoose.model('farmers',farmerRegisterSchema) ;
module.exports = farmerRegisterModel ;