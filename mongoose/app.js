let mongoose = require("mongoose");
let {Practice, User} = require("./models/scheme");

let uri = "mongodb+srv://ama29n:MsIYt5IIVFGmDQS1@nodeexpress.0yobt.mongodb.net/Practice?retryWrites=true&w=majority";

let connect = async () => {
    await mongoose.connect(uri);
    console.log("Connected to the db");
};

connect();




// Basics 

// This is to create a new database 
// const user = new Practice({name: "aman", age: 20}); 

// However, this is not yet available on database we just have a copy of it 
// console.log(user);

// In order to push it on the database we have to use the following command
// user.save();



// The output of the above program is as follows 

// {
//     name: 'aman',
//     age: 20,
//     _id: new ObjectId("620237b0518c742652cfd70c")
//   }
//   CONNECTED TO DB


// Here we can se that we were able to see the copy of our user and we connected to the database afterwards,


// However, here if we will print the user, everytime the _id will be different but we are not pushing this data into the database.

// Important
// user.save() is a async function therefore it returns a promise so use it in a async function

// async function run() {
//     try {
//         let user = new Practice({name: "aman", age: 20});
//         await user.save();
//         console.log(user);
//     }
//     catch (e) {
//         console.log(e); 
//     }
// }

// run();



// async function run() {
//     try {
//         let user = await Practice.create({name: "aman", age: 20});
//         user.name = "Kyle";
//         user.save();

//         // let user = new Practice({name: "aman", age: 20});
//         // await user.save();
//         console.log(user);
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

// run();








// User Schema 

// async function run() {
//     try {
//         let user = await User.create({
//             name: "John",
//             age: 20,
//             email: "JOHN@gmail.com",

//             // This date wont't work
//             createdAt: 5,
//             hobbies: ["playing", "reading"],
//             address: {
//                 street: 2,
//                 area: "USA"
//             },
//             gender: "Male"
//         });

//         // This user will not have the gender property as it is not in the User Schema 
//         console.log(user);

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// run();




// Accessing the data

// async function run() {
//     try {
//         // Finding an user
//         // let user = await User.findById("6202880679545055f3d1b570");

//         // find method
//         // array is returned 
//         // let user = await User.find({_id: "6202880679545055f3d1b570"});

//         // find method on a specific 
//         // let user = await User.find({name: "Aman"});

//         // exits method
//         // let check = await User.exists({name: "Aman"});

//         // deleteOne and deleteMany method 
//         // let user = await User.deleteMany({name: "John"});

//         // Avoid using other methods as they will directly update the database without going through the validations




//         // Now, in our database we have 4 users and one with name "John"
        
//         // Updating a already existing user 
//         // let user = await User.findById("620293e0858f68d9880234f5");
//         // user.name = "Kyle";
//         // await user.save();

//         // Now, the name is changed from "John" to "Kyle"


//         // Setting bestfriend
//         let user = await User.find({name: "Aman"});
//         user[0].bestFriend = "6202880679545055f3d1b570";
//         await user[0].save();

//         console.log(user[0]);

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// run();





// Ways to access data

// async function run() {
//     try {
//         // 1
//         // let user = await User.where("name").equals("Aman");

//         // 2
//         // let user = await User.where("name").equals("Aman").where("age").gt(18);

//         // 3
//         // let user = await User.where("name").equals("Aman").where("age").lt(18);

//         // 4
//         // let user = await User.where("name").equals("Aman").where("age").gt(18).limit(1);

//         // 5
//         // let user = await User.where("name").equals("Aman").where("age").gt(18).select("name");

//         // console.log(user);

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// run();








async function run() {
    try {
        

    } catch (error) {
        console.log(error.message);
    }
}

run();