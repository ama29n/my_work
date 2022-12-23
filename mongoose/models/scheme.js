let mongoose = require("mongoose");


// We have created a new model with name "Practice" and will follow the scheme "mySchema"
const mySchema = new mongoose.Schema({
    name: String,
    age: Number
});


 
// Creating a more advance model with validations
const newSchema = new mongoose.Schema({
    name: {
        type: String,

        // minimum length
        minlength: 4,

        // maximum length
        maxlength: 26,

        // set from following values only
        enum: []
    },

    age: {
        type: Number,

        // set minimum value
        min: 18,

        // set maximum value
        max: 60,

        // creating our own validate function
        validate: {
            validator: v => v % 2 == 0,
            message: props => `${props.value} is not a valid age`
        }
    },

    email: {
        type: String,

        // If we won't give the email it will give error
        required: true,

        // emails are lowercase, this will turn emails to lowercse
        lowercase: true,
    },

    createdAt: {
        type: Date,
        
        // set it permanent
        immutable: true,

        // default value
        default: () => {return Date.now();}
    },

    updatedAt: Date,

    bestFriend: mongoose.SchemaTypes.ObjectId,

    // We have to specify in the array what type of array it will be otherwise it will be a mixed array
    hobbies: [String],

    address: {
        street: Number,
        area: String
    }
});




// Middleware

// 3 options are available: save, validate & remove

newSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
});

newSchema.post("save", function(doc, next) {
    console.log(doc.age);
    next();
});


// We have to export the models as well
let Practice = mongoose.model("Practice", mySchema); 
let User = mongoose.model("User", newSchema);

module.exports = {Practice, User};

