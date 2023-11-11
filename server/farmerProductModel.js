var mongoose = require('mongoose') ;

var farmerProductSchema = mongoose.Schema(
    {
        farmerProductName : 
        {
           type:String ,
          // required:true 
        } ,

        farmerProductRate :
        {
            type:String ,
          //  required:true 
        } ,
    }
)

if(mongoose.models['farmerproducts']){
    return mongoose.model('farmerproducts') ;
}

var farmerProducts = mongoose.model('farmerproducts',farmerProductSchema) ;
module.exports = farmerProducts  ;