const User = require('../Model/User');  // importing the User Model
const {OAuth2Client}= require('google-auth-library');
const { response } = require('express');

const client =  new OAuth2Client("745717577080-5uo0jrq7g23qqioe155h28u94a0co1cj.apps.googleusercontent.com")
// to check the authenticity of the user 
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.find({ email: email, password: password })
        .then(result => {
            if (result.length >= 1) {
                res.status(200).json({ message: "User LoggedIn Sucessfully", isAuthenticated: true, user: result })
            }
            else {
                res.status(200).json({ message: "User Not LoggedIn Sucessfully", isAuthenticated: false, user: result })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
}


// addUser to signup the user to DB
exports.signUp = (req, res, next) => {
    const email  = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const SignInUser = new User({email:email, password: password, firstname: firstname, lastname: lastname });
    SignInUser.save().then(result => {
        res.status(200).json({ message: "User SignedUp Sucessfully", user: result })
    }).catch(err => {
        res.status(500).json({ message: err })
    })
}

// delete function api-------->
exports.deleteItem = (req, res, next) =>{
   const id  = req.body.id;
   User.remove({"_id":id})
   .then(
    result => {
        res.status(200).json({ message: "User deleted Sucessfully", user: result })
    }
   )
   .catch(err => {
    res.status(500).json({ message: err })
})
    }



    
exports.googleLogin = (req, res, next) => {
    const { tokenId } = req.body;
    client
      .verifyIdToken({
        idToken: tokenId,
        audience:
          "745717577080-5uo0jrq7g23qqioe155h28u94a0co1cj.apps.googleusercontent.com",
      })
      .then((response) => {
        const { email_verified, given_name, email } = response.payload;
  
        console.log(response.payload);
        if (email_verified) {
          User.findOne({ email }).exec((err, user) => {
            if (err) {
              console.log(err);
              return res.status(400).json({ error: "Something went wrong" });
            } else {
              if (user) {
                const result = user;
                res.status(200).json({
                  message: "User LoggedIn Sucessfully",
                  isAuthenticated: true,
                  user: result,
                });
              } else {
                const password = email + "@" + given_name;
                let newUser = new User({ name: given_name, email, password });
                newUser.save((err, data) => {
                  if (err) {
                    console.log(err);
                    return res.json({ error: "Error creating User" });
                  }
                  return res.json({ data });
                });
              }
            }
          });
        }
      });
  };