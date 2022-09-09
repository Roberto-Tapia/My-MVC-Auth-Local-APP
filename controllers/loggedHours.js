const Hours = require('../models/Logged-Hours')

module.exports = {
    getLoggedHours: async (req,res)=>{
        console.log(req.user)
        try{
            const hoursFromDatabase = await Hours.find({userId:req.user.id})
            const itemsLeft = await Hours.countDocuments({userId:req.user.id,completed: false})
            res.render('loggedHours.ejs', {hoursToDisplay: hoursFromDatabase, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createLoggedHours: async (req, res)=>{
        try{
            await Hours.create({timeIn: req.body.setTimeIn, timeOut: req.body.setTimeOut, date: req.body.setDate, userId: req.user.id})
            console.log('Time has been added!')
            res.redirect('/loggedHours')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Hours.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Hours.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteLoggedHours: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Hours.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Logged Hours')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    