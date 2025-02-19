const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { where, Sequelize } = require('sequelize');
const db = require("../models/db.index");
const { Where } = require('sequelize/lib/utils');

const User= db.user; 

function Register(req, res){
	User.findOne({where: {email:req.body.email}}).then(result =>{
        //for checking if the student number already exist
        if(result)
        {
            res.status(409).json({
                message: "User already exist"
            })
            
        }else
        {
            bcryptjs.genSalt(10, function(err, salt){  //can decrease the number of rounds, so the my program can be fast

                bcryptjs.hash(req.body.password, salt, function(err, hash){
        
                    const user = {
                        firstName: req.body.firstName,
                        surname: req.body.surname,
                        email: req.body.email,
                        dept: req.body.dept,
                        password: hash,
                    };
                
                    User.create(user).then(result =>{
                        res.status(201).json({
                            message: "User created successfully",
                            user: result
                        })
                    }).catch(error =>{
                        res.status(500).json({
                            message: "Something went wrong when creating a user",
                            error: error
                        })
                    });
        
                });  //end of hash
        
            });  //end of genSalt

        }

    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong when registering a user, server",
            error: error
        })
    });
    
}

//Login function
function Login(req, res){
    User.findOne({where: { email:req.body.email }}).then(user =>{
        if(user === null)
        {
            res.status(401).json({ 
                message: "Invalid details",
            })

        }else
        {
            //Here enter password is compared with the password in the database
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result)
                {
                    const token1 = jwt.sign({
                        email: user.email,
                        password: user.password
                    }, "secret");
                     
                    res.status(200).json({
                        message: "User Logged in",
                        user: user, 
                        token: token1
                    });
                    

                }else
                {
                    //wrong password
                    res.status(401).json({ 
                        message: "Server error details",
                    })

                }

            });

        } 

    }).catch(error =>{
        res.status(401).json({ 
            message: "Something went wrong",
        })
        
    });
}

//getting student with using the student number
function getUser(req, res){
    Student.findOne({where: { email:req.userData.userId }}).then(result =>{
        res.status(200).json(result);
        console.log(req.userData.userId)
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

//Getting all users
function getAllUser(req, res){
    User.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function updateUser(req, res){
    const user = {
        firstName: req.body.firstName,
        surname: req.body.surname,
        email: req.body.email,
        dept: req.body.dept,
    };

    User.update(user, {where: { email:req.params.email }}).then(result =>{
        res.status(200).json({
            message: "User updated successfully",
            driver: result
        })
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}


module.exports = {
    Register : Register,
    Login: Login,
    getUser: getUser,
    getAllUser: getAllUser,
    updateUser: updateUser
}

