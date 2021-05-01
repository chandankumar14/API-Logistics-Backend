const  Details = require('../Model/Details');
// method to store data into database---->


exports.Details = (req,res,next)=>{
    const  Coustomer_name = req.body.Coustomer_name;
    const meeting_takenby = req.body.meeting_takenby;
    const meeting_organiser = req.body.meeting_organiser;
    const   meeting_type = req.body.  meeting_type;
    const id  = req.body.id;
   
let details =  new Details({Coustomer_name:Coustomer_name,meeting_takenby:meeting_takenby,
    meeting_organiser:meeting_organiser,meeting_type:meeting_type,id:id});

details.save()
.then(result =>{
res.status(200).json({
    message:"record has been save successfully ",detail:result
})
})
.catch(
    err=>{
        res.status(401).json({message:err})
    }
)

}


// getCoustomer details function to get coustomer  by coustomer_ name
exports.Getdetails = (req, res,next) => {
    const id = req.body.id;
    Details.find({ id:id}).then(result => {
        res.status(200).json({ message: "coustomer details Fetched Sucessfully", coustomer_details: result })
            .catch(err => {
                res.status(500).json({ message: err })
            });
    })
}