var mongoose = require('mongoose') ;

var buyerProductSchema = mongoose.Schema(
    {
        productQuantity : {
            type:String  ,
           // required:true ,
        } ,

        shippingLocation : {
            type:String ,
          //  required:true ,
        }
    }
)

if(mongoose.model['buyerproducts'])
{ 
    return mongoose.model('buyerproducts') ;
}

var buyerProducts = mongoose.model('buyerproducts',buyerProductSchema) ;
module.exports = buyerProducts ;