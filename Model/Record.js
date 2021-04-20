const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Record = new Schema({
    Coustomer_name:{
        type:String,
        require:true
    },
    Company_name:{
        type:String,
        require:true
    },
    Contact_number:{
        type:String,
        require:true
    },
    Pin_code:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    stage:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('record',Record);