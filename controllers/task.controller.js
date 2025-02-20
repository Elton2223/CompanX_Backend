const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { where, Sequelize } = require('sequelize');
const db = require("../models/db.index");
const { Where } = require('sequelize/lib/utils');

const Task = db.Task;

//Creating a task
function create(req, res) {
    bcryptjs.genSalt(10, function (err, salt) {  //can decrease the number of rounds, so the my program can be fast

        const task = {
            taskRed: req.body.taskRef,
            shortDesc: req.body.shortDesc,
            category: req.body.category, 
            assignee: req.body.assignee,
            dueDate: req.body.dueDate,   
            status: "Unassigned",
            timeSpent: req.body.timeSpent
        };

        Task.create(task).then(result => {
            res.status(201).json({
                message: "Task created successfully",
                task: result
            })
        }).catch(error => {
            res.status(500).json({
                message: "Something went wrong when creating a user",
                error: error
            })
        });

    });

}

//Getting all Tasks
function getAll(req, res){
    Task.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

//ending the Task
function endTask(req, res){
    const task = {
        status: "Completed",
    };

    Task.update(task, {where: { taskRef:req.params.taskRef }}).then(result =>{
        res.status(200).json({
            message: "Task Completed",
            task: result
        })
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

//task in-progress
function inprogressTask(req, res){
    const task = {
        status: "In-Progress",
    };

    Task.update(task, {where: { taskRef:req.params.taskRef }}).then(result =>{
        res.status(200).json({
            message: "Task In-Progress",
            task: result
        })
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

//task pending
function pendingTask(req, res){
    const task = {
        status: "Pending",
    };

    Task.update(task, {where: { taskRef:req.params.taskRef }}).then(result =>{
        res.status(200).json({
            message: "Task Pending",
            task: result
        })
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

//update description 
function updateDescription(req, res){
    const task = {
        shortDesc: req.body.shortDesc,
    };

    Task.update(task, {where: { taskRef:req.params.taskRef }}).then(result =>{
        res.status(200).json({
            message: "Student updated successfully",
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
    create: create, 
    getAll: getAll, 
    endTask: endTask,
    inprogressTask: inprogressTask, 
    pendingTask: pendingTask,
    updateDescription: updateDescription

}
