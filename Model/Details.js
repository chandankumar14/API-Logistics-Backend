const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Details  = new Schema({

    Coustomer_name:{
        type:String,
        require:true
    },
    meeting_takenby:{
        type:String,
        require:true
    },

    meeting_organiser:{
        type:String,
        require:true
    },

    meeting_type:{
        type:String,
        require:true
    },
    Date:{ 
    type : Date,
     default: Date.now
     },
     id:{
         type:String,
         require:true
     }

})



module.exports = mongoose.model("details",Details);