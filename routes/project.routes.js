const router = require('express').Router()

const Project = require('../models/Project.model')
const Task = require('../models/Task.model')

router.post('/projects',(req,res,next)=>{
    const {title, description} = req.body


    Project.create({title,description})
    .then(newProject=>{
        console.log(newProject)
        res.json(newProject)})
    .catch(error=>console.log(error))
})

router.get('/projects',(req,res,next)=>{
    Project.find()
    .then(allProjects=>{
        res.json(allProjects)
    })
    .catch((error)=>{
        console.log(error)
    })
})

router.get('/projects/:projectId',(req,res,next)=>{
    console.log(req.params.projectId)
    Project.findById(req.params.projectId)
    .then(oneProject=>{
        res.json(oneProject)
    })
})

module.exports = router;