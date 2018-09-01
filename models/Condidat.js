var mongoose =require('mongoose');
/*var eet= mongoose.Schema({
    start_date:{
        type :String,
        /!*required:true*!/
    },
        end_date:{
        type : String
    },
    title:{
        type: String,
        /!*required:true*!/
    }
});*/
var candidatSchema = mongoose.Schema({
    first_name:{
        type: String,
       /* required:true*/
    },
    last_name:{
        type: String,
        /*required:true*/
    },
    birth_date:{
        type:String,
        /*required:true*/
    },
    birth_place:{
        type: String,
        /*required:true*/
    },
    nationality:{
        type: String,
        /*required:true*/
    },
    gender:{
        type: String,
        /*required:true*/
    },
    country:{
        type: String,
        /*/!**!/required:true*/
    },
    phone:{
        type: String,
        /*required:true*/
    },
    email:{
        type: String,
        /*required:true,*/
        unique:true,
        lowercase:true
    },
    username:{
        type : String,
       /* required : true,*/
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        /*required:true*/
    },
    picture:{
        type: Buffer,
        /*required:true*/
    },
    level:{
        type: String,
       /* required:true*/
    },
    fields:{
        type: String,
        /*required:true*/
    },
    position:{
        type: String,
        /*required:true*/
    },
    yofexp:{
        type: String,
        /*required:true*/
    },
    education:{
        type:[String],
        /*required:true*/
    },
    experience:{
        type: [String],

    },
    training:{
        type: [String],
        /*required:true*/
    },
    skills:{
        type:[String],

    },
    language:{
        type: [String],
        /*required:true*/
    },
    extra:{
      type:[String],
    },
    file:{
        type:[Buffer]
    }
});
var Candidat = module.exports = mongoose.model('Condidat', candidatSchema);
module.exports=Candidat;