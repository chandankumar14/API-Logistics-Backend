const  Record = require('../Model/Record');
// method to store data into database---->


exports.Record = (req,res,next)=>{
    const  Coustomer_name = req.body.Coustomer_name;
    const Company_name = req.body.Company_name;
    const Contact_number = req.body.Contact_number;
    const  Pin_code = req.body. Pin_code;
    const email  = req.body.email;
    const stage  = req.body.stage;
    const id = Contact_number +12;
let records =  new Record({Coustomer_name:Coustomer_name,Company_name:Company_name,
Contact_number:Contact_number,Pin_code:Pin_code,email:email,stage:stage,id:id});

records.save()
.then(result =>{
res.status(200).json({
    message:"record has been save successfully ",record:result
})
})
.catch(
    err=>{
        res.status(401).json({message:err})
    }
)

}


// metthod for fetching data from database---->
exports.GetRecord =(req,res,next)=> {
Record.find()
.then(result =>{
    res.status(200).json({
        message:"record fetch successfully", record:result
    })
})
.catch(
    err=>{
        res.status(401).json({message:err})
    }
)
}
// record fetch by using Id
exports.GetRecordId =(req,res,next)=> {
    const id = req.body.id;
    Record.find({id:id})
    .then(result =>{
        res.status(200).json({
            message:"record fetch successfully by using Id", record:result
        })
    })
    .catch(
        err=>{
            res.status(401).json({message:err})
        }
    )
    }