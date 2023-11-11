var express = require('express') ;
var http = require('http') ;
var app = express() ;
var Connect = require('./configure') ;
const {buyerProfileRouter,buyerProductRouter,buyerLoginRouter,buyerComplaintRouter,farmerLoginRouter,farmerProfileRouter,farmerProductRouter,farmerComplaintRouter} = require('./controller') ;
var cors = require('cors') ;
var morgan = require('morgan') ;
var path = require('path') ;
var server = http.createServer(app) ;


var corsOptions = {
    origin:"https://localhost:3000" ,
}

app.use(express.json()) ;
app.use(morgan('dev')) ;
app.use(cors(corsOptions)) ;
app.use(express.static(path.join(__dirname, 'public')))


Connect() ;

app.use("/v1/api/farmerProfiles", farmerLoginRouter) ;
app.use("/v2/api/farmerProfiles",farmerProfileRouter) ;
app.use("/v3/api/farmerProducts",farmerProductRouter) ;
app.use("/v4/api/farmerComplaints",farmerComplaintRouter) ;


app.use("/v5/api/buyerProfiles",buyerProfileRouter) ;
app.use("/v6/api/buyersProduct",buyerProductRouter) ;
app.use("/v7/api/buyerProfiles",buyerLoginRouter) ;
app.use("/v8/api/buyerComplaints",buyerComplaintRouter) ;

server.listen(3500 , () => 
{
    console.log(" App launched ") ; 
}
)